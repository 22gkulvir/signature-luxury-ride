/* ============================================================
   auth.js — Signature Luxury Ride | Auth & Data Utilities
   All data stored in localStorage (demo / no-backend mode)
   ============================================================ */

const SLR = {
  USERS_KEY:    'slr_users',
  SESSION_KEY:  'slr_session',
  BOOKINGS_KEY: 'slr_bookings',

  /* ── User store ── */
  getAllUsers() {
    try { return JSON.parse(localStorage.getItem(this.USERS_KEY)) || []; }
    catch { return []; }
  },
  saveAllUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },
  findUserByEmail(email) {
    return this.getAllUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
  },
  addUser(user) {
    const users = this.getAllUsers();
    users.push(user);
    this.saveAllUsers(users);
  },
  updateUser(updated) {
    const users = this.getAllUsers().map(u => u.id === updated.id ? updated : u);
    this.saveAllUsers(users);
    if (this.getSession()?.id === updated.id) this.setSession(updated);
  },

  /* ── Session ── */
  getSession() {
    try { return JSON.parse(localStorage.getItem(this.SESSION_KEY)); }
    catch { return null; }
  },
  setSession(user) {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem(this.SESSION_KEY);
  },
  requireAuth(redirectTo = 'signin.html') {
    if (!this.getSession()) {
      window.location.href = redirectTo;
      return false;
    }
    return true;
  },

  /* ── Bookings ── */
  getBookings(userId) {
    try {
      const all = JSON.parse(localStorage.getItem(this.BOOKINGS_KEY)) || {};
      return all[userId] || [];
    } catch { return []; }
  },
  saveBookings(userId, bookings) {
    const all = JSON.parse(localStorage.getItem(this.BOOKINGS_KEY)) || {};
    all[userId] = bookings;
    localStorage.setItem(this.BOOKINGS_KEY, JSON.stringify(all));
  },
  addBooking(userId, booking) {
    const bookings = this.getBookings(userId);
    bookings.push(booking);
    this.saveBookings(userId, bookings);
  },

  /* ── Demo data seeder ── */
  seedBookings(userId) {
    if (this.getBookings(userId).length > 0) return; // already seeded
    const now = new Date();
    const d = (days) => {
      const x = new Date(now);
      x.setDate(x.getDate() + days);
      return x.toISOString().split('T')[0];
    };
    const bookings = [
      { id:'bk001', date:d(-18), time:'08:00', pickup:'DFW International Airport, Terminal D', dropoff:'2200 Ross Ave, Dallas, TX 75201', service:'Airport Transfer — Pickup', vehicle:'Cadillac Escalade', passengers:2, status:'completed', amount:'$95', driver:'David M.' },
      { id:'bk002', date:d(-11), time:'14:30', pickup:'Hilton Anatole, 2201 Stemmons Fwy', dropoff:'American Airlines Center, Dallas', service:'Special Event', vehicle:'Lincoln Navigator', passengers:4, status:'completed', amount:'$150', driver:'James T.' },
      { id:'bk003', date:d(-4),  time:'09:00', pickup:'5000 Quorum Dr, Dallas TX', dropoff:'Dallas Love Field Airport', service:'Airport Transfer — Drop-off', vehicle:'GMC Yukon Denali', passengers:1, status:'completed', amount:'$95', driver:'Robert P.' },
      { id:'bk004', date:d(2),   time:'06:30', pickup:'1401 Elm St, Dallas TX 75202', dropoff:'DFW International Airport, Terminal A', service:'Airport Transfer — Drop-off', vehicle:'Cadillac Escalade', passengers:2, status:'confirmed', amount:'$95', driver:'David M.' },
      { id:'bk005', date:d(6),   time:'19:00', pickup:'The Ritz-Carlton, 2121 McKinney Ave', dropoff:'Reunion Tower, 300 Reunion Blvd E', service:'Special Event', vehicle:'Lincoln Navigator', passengers:6, status:'confirmed', amount:'$200', driver:'James T.' },
      { id:'bk006', date:d(10),  time:'11:00', pickup:'DFW International Airport, Terminal E', dropoff:"5201 N O'Connor Blvd, Irving TX", service:'Corporate Travel', vehicle:'GMC Yukon Denali', passengers:3, status:'pending', amount:'$110', driver:'TBD' },
      { id:'bk007', date:d(17),  time:'15:00', pickup:'400 N Akard St, Dallas TX', dropoff:'Frisco Station, 6750 Winning Dr, Frisco TX', service:'Hourly Chauffeur (3hrs)', vehicle:'Cadillac Escalade', passengers:1, status:'confirmed', amount:'$360', driver:'Robert P.' },
      { id:'bk008', date:d(24),  time:'08:30', pickup:'Marriott Marquis Dallas, 2101 Commerce St', dropoff:'Fort Worth Convention Center', service:'Corporate Travel', vehicle:'Chevrolet Suburban', passengers:5, status:'pending', amount:'$160', driver:'TBD' },
    ];
    this.saveBookings(userId, bookings);
  },

  /* ── Nav update helper ── */
  updateNav() {
    const user = this.getSession();
    document.querySelectorAll('.nav-signin').forEach(el => {
      el.style.display = user ? 'none' : '';
    });
    document.querySelectorAll('.nav-profile-wrap').forEach(el => {
      el.style.display = user ? '' : 'none';
      if (user) {
        const nm = el.querySelector('.nav-user-name');
        if (nm) nm.textContent = user.name.split(' ')[0];
      }
    });
  },

  /* ── Helpers ── */
  generateId() {
    return 'u_' + Math.random().toString(36).slice(2, 10);
  },
  formatDate(dateStr) {
    if (!dateStr) return '';
    const [y,m,d] = dateStr.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[+m-1]} ${+d}, ${y}`;
  },
  formatTime(t) {
    if (!t) return '';
    const [h,m] = t.split(':');
    const hr = +h;
    return `${hr > 12 ? hr-12 : hr || 12}:${m} ${hr >= 12 ? 'PM' : 'AM'}`;
  },
  isUpcoming(dateStr) {
    return new Date(dateStr + 'T00:00:00') >= new Date(new Date().toDateString());
  },
  statusColor(status) {
    return { confirmed:'#4CAF50', completed:'#888', pending:'#C9A84C', cancelled:'#ff6b6b' }[status] || '#888';
  },
  statusBg(status) {
    return { confirmed:'rgba(76,175,80,0.1)', completed:'rgba(136,136,136,0.1)', pending:'rgba(201,168,76,0.1)', cancelled:'rgba(255,107,107,0.1)' }[status] || 'rgba(136,136,136,0.1)';
  },
  roleLabel(role) {
    return { driver:'Driver', hotel:'Hotel Partner', corporate:'Corporate Client' }[role] || role;
  },
  roleIcon(role) {
    return { driver:'🚗', hotel:'🏨', corporate:'💼' }[role] || '👤';
  }
};
