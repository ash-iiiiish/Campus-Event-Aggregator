// Sample event and club data for Campus Connect application
        // Enhanced event data with status, enrollment, and rating
        const events = [
            {
                id: 1,
                title: "Hackathon 2K25",
                category: "hackathon",
                date: "2025-11-05",
                time: "10:00 AM",
                endTime: "4:00 PM",
                location: "Computer Science Lab",
                description: "Join our 24-hour coding marathon to solve real-world problems. Open to all skill levels with exciting prizes for winners. Teams of up to 4 members allowed. Food and refreshments will be provided.",
                rsvpCount: 45,
                capacity: 60,
                enrolled: false,
                image: "images/Screenshot 2025-11-07 005821.png",
                status: "upcoming",
                rating: {
                    average: 0,
                    count: 0
                }
            },
            {
                id: 2,
                title: "Typing Contest",
                category: "competition",
                date: "2025-11-05",
                time: "2:00 PM",
                endTime: "4:00 PM",
                location: "Open Area",
                description: "Test your typing speed and accuracy in this exciting competition. Categories for beginners and advanced typists. Prizes for the top three performers in each category.",
                rsvpCount: 32,
                capacity: 40,
                enrolled: false,
                image: "images/Screenshot 2025-11-07 005812.png",
                status: "ongoing",
                rating: {
                    average: 0,
                    count: 0
                }
            },
            {
                id: 3,
                title: "Mobile Gaming Tournament",
                category: "gaming",
                date: "2025-11-05",
                time: "3:00 PM",
                endTime: "7:00 PM",
                location: "Examination Hall",
                description: "Compete in popular mobile games like PUBG Mobile and COD Mobile. Form teams or compete individually. Exciting cash prizes and merchandise for winners.",
                rsvpCount: 28,
                capacity: 50,
                enrolled: false,
                image: "images/mobilegmz.png",
                status: "upcoming",
                rating: {
                    average: 0,
                    count: 0
                }
            },
            {
                id: 4,
                title: "PC Gaming Championship",
                category: "gaming",
                date: "2025-11-05",
                time: "5:00 PM",
                endTime: "10:00 PM",
                location: "Examination Hall",
                description: "Show off your skills in popular PC games like Valorant, CS:GO, and Dota 2. Cash prizes for top performers. Bring your own peripherals or use provided equipment.",
                rsvpCount: 36,
                capacity: 40,
                enrolled: false,
                image: "images/pcgmz.png",
                status: "completed",
                rating: {
                    average: 4.2,
                    count: 15
                }
            },
            {
                id: 5,
                title: "FlashMob Dance Event",
                category: "social",
                date: "2025-11-05",
                time: "11:00 AM",
                endTime: "1:00 PM",
                location: "Lobby",
                description: "Join us for a surprise flashmob dance event in the campus lobby. Learn choreographed moves and be part of an exciting performance that will energize the campus atmosphere.",
                rsvpCount: 20,
                capacity: 30,
                enrolled: false,
                image: "images/Screenshot 2025-11-07 024250.png",
                status: "ongoing",
                rating: {
                    average: 0,
                    count: 0
                }
            },
            {
                id: 6,
                title: "Film Making",
                category: "social",
                date: "2025-11-05",
                time: "9:00 AM",
                endTime: "12:00 PM",
                location: "Auditorium",
                description: "Learn the art of filmmaking from scriptwriting to editing. Participate in hands-on sessions and create your own short film by the end of the workshop.",
                rsvpCount: 25,
                capacity: 30,
                enrolled: false,
                image: "images/Screenshot 2025-11-07 024301.png",
                status: "completed",
                rating: {
                    average: 4.5,
                    count: 18
                }
            }
        ];

        // Sample clubs data with additional academic club
        const clubs = [
            {
                id: 1,
                name: "Computer Science Club",
                category: "Computer Science",
                members: 15,
                description: "For students interested in programming, algorithms, and technology. We host weekly coding sessions and workshops.",
                image: "images/coding_club.jpeg",
                isMember: true
            },
            {
                id: 2,
                name: "Cultural Society",
                category: "Cultural",
                members: 15,
                description: "Explore the art of cultural through extra activities. We organize events like dance, music, and drama performances throughout the year.",
                image: "images/cultural_club.jpeg",
                isMember: false
            },
            {
                id: 3,
                name: "Gaming Club",
                category: "Gaming",
                members: 15,
                description: "For gaming enthusiasts of all kinds - mobile, PC, and console. We host regular tournaments and gaming nights.",
                image: "images/gaming_club.jpeg",
                isMember: true
            },
            {
                id: 4,
                name: "Academic Club",
                category: "Academic",
                members: 12,
                description: "A club dedicated to academic excellence and intellectual discussions. We organize seminars, study groups, and guest lectures.",
                image: "images/academic_club.jpeg",
                isMember: false
            }
        ];

        // Notifications data
        const notifications = [
            {
                id: 1,
                title: "Hackathon Registration Open",
                description: "Register now for the annual coding competition with exciting prizes",
                time: "2 hours ago",
                icon: "fas fa-calendar-check"
            },
            {
                id: 2,
                title: "New Workshop: AI & ML Fundamentals",
                description: "Join us this weekend for an introductory workshop on AI and Machine Learning",
                time: "5 hours ago",
                icon: "fas fa-bullhorn"
            },
            {
                id: 3,
                title: "Gaming Tournament Starting Soon",
                description: "Mobile Gaming contest begins in 3 days. Prepare your teams!",
                time: "1 day ago",
                icon: "fas fa-trophy"
            }
        ];

        // Admin credentials
        const adminCredentials = {
            email: "kumarashisha54@gmail.com",
            password: "1234567890",
            name: "Ashish Kumar",
            branch: "Computer Science",
            type: "admin"
        };

        // DOM Elements
        const loginPage = document.getElementById('loginPage');
        const mainApp = document.getElementById('mainApp');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const formTitle = document.getElementById('formTitle');
        const formSubtitle = document.getElementById('formSubtitle');
        const toggleForm = document.getElementById('toggleForm');
        const toggleText = document.getElementById('toggleText');
        const loginTypeBtns = document.querySelectorAll('.login-type-btn');
        const eventsGrid = document.getElementById('eventsGrid');
        const eventsGridEvents = document.getElementById('eventsGridEvents');
        const clubsGrid = document.getElementById('clubsGrid');
        const upcomingEvents = document.getElementById('upcomingEvents');
        const recommendedEvents = document.getElementById('recommendedEvents');
        const userProfile = document.getElementById('userProfile');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');
        const adminBadge = document.getElementById('adminBadge');
        const notificationBell = document.getElementById('notificationBell');
        const notificationsDropdown = document.getElementById('notificationsDropdown');
        const profileDropdown = document.getElementById('profileDropdown');
        const exploreEventsBtn = document.getElementById('exploreEventsBtn');
        const createEventBtn = document.getElementById('createEventBtn');
        const manageClubsBtn = document.getElementById('manageClubsBtn');
        const navLinks = document.querySelectorAll('nav a');
        const pages = document.querySelectorAll('#mainApp > div');
        const applyFiltersBtn = document.getElementById('applyFiltersBtn');
        const applyFiltersBtnEvents = document.getElementById('applyFiltersBtnEvents');
        const resetFiltersBtn = document.getElementById('resetFiltersBtn');
        const resetFiltersBtnEvents = document.getElementById('resetFiltersBtnEvents');
        const eventSearch = document.getElementById('eventSearch');
        const eventSearchEvents = document.getElementById('eventSearchEvents');
        const statusTabs = document.querySelectorAll('.status-tab');
        const eventDetailModal = document.getElementById('eventDetailModal');
        const closeEventModal = document.getElementById('closeEventModal');
        const enrollBtn = document.getElementById('enrollBtn');
        const ratingSection = document.getElementById('ratingSection');
        const eventRating = document.getElementById('eventRating');
        const submitRatingBtn = document.getElementById('submitRatingBtn');
        const adminEventActions = document.getElementById('adminEventActions');
        const addEventBtn = document.getElementById('addEventBtn');
        const addEventModal = document.getElementById('addEventModal');
        const closeAddEventModal = document.getElementById('closeAddEventModal');
        const addEventForm = document.getElementById('addEventForm');
        const viewProfileBtn = document.getElementById('viewProfileBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const profileModal = document.getElementById('profileModal');
        const closeProfileModal = document.getElementById('closeProfileModal');
        const contactCollegeBtn = document.getElementById('contactCollegeBtn');
        const contactDevelopersBtn = document.getElementById('contactDevelopersBtn');
        const contactCollegeBtnSupport = document.getElementById('contactCollegeBtnSupport');
        const contactDevelopersBtnSupport = document.getElementById('contactDevelopersBtnSupport');

        // History navigation elements
        const backBtnEvents = document.getElementById('backBtnEvents');
        const forwardBtnEvents = document.getElementById('forwardBtnEvents');
        const currentPageIndicatorEvents = document.getElementById('currentPageIndicatorEvents');
        
        const backBtnDashboard = document.getElementById('backBtnDashboard');
        const forwardBtnDashboard = document.getElementById('forwardBtnDashboard');
        const currentPageIndicatorDashboard = document.getElementById('currentPageIndicatorDashboard');
        
        const backBtnClubs = document.getElementById('backBtnClubs');
        const forwardBtnClubs = document.getElementById('forwardBtnClubs');
        const currentPageIndicatorClubs = document.getElementById('currentPageIndicatorClubs');
        
        const backBtnSupport = document.getElementById('backBtnSupport');
        const forwardBtnSupport = document.getElementById('forwardBtnSupport');
        const currentPageIndicatorSupport = document.getElementById('currentPageIndicatorSupport');

        // History management
        let historyStack = [];
        let currentHistoryIndex = -1;

        // Current state
        let currentEventStatusFilter = 'all';
        let currentEvent = null;
        let userRating = 0;
        let currentUser = null;
        let isAdmin = false;
        let users = [];

        // Initialize the app
        function init() {
            // Load users from localStorage
            const storedUsers = localStorage.getItem('campusConnectUsers');
            if (storedUsers) {
                users = JSON.parse(storedUsers);
            }
            
            // Check if user is already logged in
            const loggedInUser = localStorage.getItem('campusConnectCurrentUser');
            if (loggedInUser) {
                currentUser = JSON.parse(loggedInUser);
                isAdmin = currentUser.type === 'admin';
                
                // Show main app
                loginPage.style.display = 'none';
                mainApp.style.display = 'block';
                
                // Update UI based on user type
                updateUIForUser();
                
                // Render initial content
                renderEvents(events, eventsGrid);
                renderEvents(events, eventsGridEvents);
                renderClubs(clubs);
                renderDashboardEvents();
                renderNotifications();
            } else {
                // Initially show login page, hide main app
                loginPage.style.display = 'flex';
                mainApp.style.display = 'none';
            }
            
            // Initialize history with home page
            addToHistory('home');
            
            // Setup event listeners
            setupEventListeners();
        }

        // Set up event listeners
        function setupEventListeners() {
            // Login form submission
            loginForm.addEventListener('submit', handleLogin);
            
            // Signup form submission
            signupForm.addEventListener('submit', handleSignup);
            
            // Toggle between login and signup forms
            toggleForm.addEventListener('click', (e) => {
                e.preventDefault();
                toggleLoginSignup();
            });
            
            // Login type toggle
            loginTypeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    loginTypeBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
            });

            // Navigation
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = e.target.getAttribute('data-page');
                    
                    if (page === 'support') {
                        // If on home page, scroll to support section
                        if (!document.getElementById('homePage').classList.contains('hidden')) {
                            document.getElementById('supportSection').scrollIntoView({ behavior: 'smooth' });
                        } else {
                            // Otherwise navigate to support page
                            navigateToPage(page);
                        }
                    } else {
                        navigateToPage(page);
                    }
                });
            });

            // Notifications dropdown
            notificationBell.addEventListener('click', toggleNotificationsDropdown);
            
            // Profile dropdown
            userProfile.addEventListener('click', toggleProfileDropdown);
            
            // View profile button
            viewProfileBtn.addEventListener('click', showProfileModal);
            
            // Logout button
            logoutBtn.addEventListener('click', handleLogout);
            
            // Close profile modal
            closeProfileModal.addEventListener('click', () => {
                profileModal.classList.add('hidden');
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!notificationBell.contains(e.target) && !notificationsDropdown.contains(e.target)) {
                    notificationsDropdown.classList.remove('show');
                }
                
                if (!userProfile.contains(e.target) && !profileDropdown.contains(e.target)) {
                    profileDropdown.classList.remove('show');
                }
            });

            // Explore events button
            exploreEventsBtn.addEventListener('click', () => {
                navigateToPage('events');
            });
            
            // Create event button
            createEventBtn.addEventListener('click', () => {
                if (isAdmin) {
                    showAddEventModal();
                } else {
                    alert('Only admins can create events. Please contact your campus administrator.');
                }
            });

            // Manage clubs button
            manageClubsBtn.addEventListener('click', () => {
                navigateToPage('clubs');
            });

            // Filter buttons
            applyFiltersBtn.addEventListener('click', applyFilters);
            applyFiltersBtnEvents.addEventListener('click', applyFilters);
            resetFiltersBtn.addEventListener('click', resetFilters);
            resetFiltersBtnEvents.addEventListener('click', resetFilters);

            // Search functionality
            eventSearch.addEventListener('input', searchEvents);
            eventSearchEvents.addEventListener('input', searchEvents);

            // Event status tabs
            document.querySelectorAll('.status-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    // Remove active class from all tabs in the same container
                    const parent = e.target.closest('.event-status-tabs');
                    parent.querySelectorAll('.status-tab').forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    e.target.classList.add('active');
                    currentEventStatusFilter = e.target.getAttribute('data-status');
                    
                    // Determine which events grid to update
                    const eventsPage = document.getElementById('eventsPage');
                    if (eventsPage.classList.contains('hidden')) {
                        renderEvents(events, eventsGrid);
                    } else {
                        renderEvents(events, eventsGridEvents);
                    }
                });
            });

            // Event detail modal
            closeEventModal.addEventListener('click', () => {
                eventDetailModal.classList.add('hidden');
            });

            // Close modal when clicking outside
            document.addEventListener('click', (e) => {
                if (e.target === eventDetailModal) {
                    eventDetailModal.classList.add('hidden');
                }
                if (e.target === addEventModal) {
                    addEventModal.classList.add('hidden');
                }
                if (e.target === profileModal) {
                    profileModal.classList.add('hidden');
                }
            });

            // Enroll button
            enrollBtn.addEventListener('click', enrollInEvent);

            // Rating stars
            eventRating.querySelectorAll('.star').forEach(star => {
                star.addEventListener('click', () => {
                    const rating = parseInt(star.getAttribute('data-rating'));
                    setRating(rating);
                });
            });

            // Submit rating button
            submitRatingBtn.addEventListener('click', submitRating);

            // Admin actions
            addEventBtn.addEventListener('click', showAddEventModal);
            
            // Close modals
            closeAddEventModal.addEventListener('click', () => {
                addEventModal.classList.add('hidden');
            });
            
            // Form submissions
            addEventForm.addEventListener('submit', handleAddEvent);

            // History navigation
            backBtnEvents.addEventListener('click', goBack);
            forwardBtnEvents.addEventListener('click', goForward);
            backBtnDashboard.addEventListener('click', goBack);
            forwardBtnDashboard.addEventListener('click', goForward);
            backBtnClubs.addEventListener('click', goBack);
            forwardBtnClubs.addEventListener('click', goForward);
            backBtnSupport.addEventListener('click', goBack);
            forwardBtnSupport.addEventListener('click', goForward);

            // Browser back/forward buttons
            window.addEventListener('popstate', handlePopState);

            // Contact buttons
            contactCollegeBtn.addEventListener('click', () => sendEmail('director.abv@gmail.com', 'Contact College'));
            contactDevelopersBtn.addEventListener('click', () => sendEmail('kumarashisha54@gmail.com', 'Contact Developers'));
            contactCollegeBtnSupport.addEventListener('click', () => sendEmail('director.abv@gmail.com', 'Contact College'));
            contactDevelopersBtnSupport.addEventListener('click', () => sendEmail('kumarashisha54@gmail.com', 'Contact Developers'));
        }

        // Send email function
        function sendEmail(email, subject) {
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hello,\n\nI would like to get in touch with you regarding...')}`;
            window.location.href = mailtoLink;
        }

        // Toggle between login and signup forms
        function toggleLoginSignup() {
            const isLoginFormVisible = loginForm.style.display !== 'none';
            
            if (isLoginFormVisible) {
                // Switch to signup form
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
                formTitle.textContent = 'Create Account';
                formSubtitle.textContent = 'Sign up to get started with Campus Connect';
                toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleForm" style="color: var(--primary); font-weight: 600;">Login here</a>';
            } else {
                // Switch to login form
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
                formTitle.textContent = 'Welcome Back!';
                formSubtitle.textContent = 'Sign in to your account to continue';
                toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleForm" style="color: var(--primary); font-weight: 600;">Sign up here</a>';
            }
            
            // Re-attach event listener to the new toggle link
            document.getElementById('toggleForm').addEventListener('click', (e) => {
                e.preventDefault();
                toggleLoginSignup();
            });
        }

        // Handle login form submission
        function handleLogin(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const userType = document.querySelector('.login-type-btn.active').getAttribute('data-type');
            
            // Simple validation
            if (!email || !password) {
                alert('Please enter both email and password');
                return;
            }
            
            // Check if admin credentials
            if (email === adminCredentials.email && password === adminCredentials.password && userType === 'club') {
                // Admin login
                simulateLogin(adminCredentials, true);
            } else {
                // Regular user login
                const user = users.find(u => u.email === email && u.password === password && u.type === userType);
                if (user) {
                    simulateLogin(user, false);
                } else {
                    alert('Invalid email or password. Please try again.');
                }
            }
        }

        // Handle signup form submission
        function handleSignup(e) {
            e.preventDefault();
            
            const name = document.getElementById('signupName').value;
            const branch = document.getElementById('signupBranch').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const userType = document.querySelector('.login-type-btn.active').getAttribute('data-type');
            
            // Simple validation
            if (!name || !branch || !email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Check if user already exists
            const existingUser = users.find(u => u.email === email);
            if (existingUser) {
                alert('An account with this email already exists. Please login instead.');
                return;
            }
            
            // Create new user
            const newUser = {
                name,
                branch,
                email,
                password,
                type: userType
            };
            
            // Add user to users array
            users.push(newUser);
            
            // Save users to localStorage
            localStorage.setItem('campusConnectUsers', JSON.stringify(users));
            
            // Automatically log in the new user
            simulateLogin(newUser, false);
        }

        // Simulate login process
        function simulateLogin(user, admin) {
            // Show loading state
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Logging in...';
            submitBtn.disabled = true;
            
            // Set user info
            currentUser = user;
            isAdmin = admin;
            
            // Save current user to localStorage
            localStorage.setItem('campusConnectCurrentUser', JSON.stringify(currentUser));
            
            // Simulate API call delay
            setTimeout(() => {
                // Hide login page, show main app
                loginPage.style.display = 'none';
                mainApp.style.display = 'block';
                
                // Update UI based on user type
                updateUIForUser();
                
                // Render initial content
                renderEvents(events, eventsGrid);
                renderEvents(events, eventsGridEvents);
                renderClubs(clubs);
                renderDashboardEvents();
                renderNotifications();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show welcome message
                showNotification('Welcome!', `Successfully logged in as ${user.name}`);
            }, 1500);
        }

        // Handle logout
        function handleLogout() {
            // Clear current user from localStorage
            localStorage.removeItem('campusConnectCurrentUser');
            
            // Reset state
            currentUser = null;
            isAdmin = false;
            
            // Hide main app, show login page
            mainApp.style.display = 'none';
            loginPage.style.display = 'flex';
            
            // Reset forms
            loginForm.reset();
            signupForm.reset();
            
            // Show login form by default
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            formTitle.textContent = 'Welcome Back!';
            formSubtitle.textContent = 'Sign in to your account to continue';
            toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleForm" style="color: var(--primary); font-weight: 600;">Sign up here</a>';
            
            // Re-attach event listener to the toggle link
            document.getElementById('toggleForm').addEventListener('click', (e) => {
                e.preventDefault();
                toggleLoginSignup();
            });
        }

        // Update UI based on user type
        function updateUIForUser() {
            userName.textContent = currentUser.name;
            userAvatar.textContent = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
            
            if (isAdmin) {
                adminBadge.classList.remove('hidden');
                adminEventActions.classList.remove('hidden');
                createEventBtn.textContent = 'Create New Event (Admin)';
            } else {
                adminBadge.classList.add('hidden');
                adminEventActions.classList.add('hidden');
                createEventBtn.textContent = 'Create New Event';
            }
        }

        // Toggle notifications dropdown
        function toggleNotificationsDropdown(e) {
            e.stopPropagation();
            notificationsDropdown.classList.toggle('show');
            // Close profile dropdown if open
            profileDropdown.classList.remove('show');
        }

        // Toggle profile dropdown
        function toggleProfileDropdown(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
            // Close notifications dropdown if open
            notificationsDropdown.classList.remove('show');
        }

        // Show profile modal
        function showProfileModal() {
            document.getElementById('profileName').value = currentUser.name;
            document.getElementById('profileBranch').value = currentUser.branch;
            document.getElementById('profileEmail').value = currentUser.email;
            document.getElementById('profileUserType').value = currentUser.type === 'admin' ? 'Administrator' : 'Student';
            
            profileModal.classList.remove('hidden');
            profileDropdown.classList.remove('show');
        }

        // Render notifications to dropdown
        function renderNotifications() {
            notificationsDropdown.innerHTML = '';
            
            if (notifications.length === 0) {
                notificationsDropdown.innerHTML = '<p class="notification-dropdown-item">No notifications</p>';
                return;
            }
            
            notifications.forEach(notification => {
                const notificationItem = document.createElement('div');
                notificationItem.className = 'notification-dropdown-item';
                
                notificationItem.innerHTML = `
                    <div class="notification-dropdown-icon">
                        <i class="${notification.icon}"></i>
                    </div>
                    <div class="notification-dropdown-content">
                        <div class="notification-dropdown-title">${notification.title}</div>
                        <div class="notification-dropdown-desc">${notification.description}</div>
                        <div class="notification-dropdown-time">${notification.time}</div>
                    </div>
                `;
                
                notificationsDropdown.appendChild(notificationItem);
            });
        }

        // Navigate to a page and update history
        function navigateToPage(page) {
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector(`a[data-page="${page}"]`).classList.add('active');
            
            // Show the page
            showPage(page);
            
            // Update history
            addToHistory(page);
            
            // Update page indicators
            updatePageIndicators(page);
        }

        // Show specific page
        function showPage(page) {
            pages.forEach(p => {
                if (p.id === `${page}Page`) {
                    p.classList.remove('hidden');
                } else {
                    p.classList.add('hidden');
                }
            });
        }

        // Add page to history
        function addToHistory(page) {
            // If we're not at the end of the history stack, remove future entries
            if (currentHistoryIndex < historyStack.length - 1) {
                historyStack = historyStack.slice(0, currentHistoryIndex + 1);
            }
            
            // Add new page to history
            historyStack.push(page);
            currentHistoryIndex = historyStack.length - 1;
            
            // Update browser history
            window.history.pushState({ page }, '', `#${page}`);
            
            // Update navigation buttons
            updateHistoryButtons();
        }

        // Handle browser back/forward buttons
        function handlePopState(event) {
            if (event.state && event.state.page) {
                const page = event.state.page;
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector(`a[data-page="${page}"]`).classList.add('active');
                
                // Show the page
                showPage(page);
                
                // Find the page in our history stack
                const index = historyStack.indexOf(page);
                if (index !== -1) {
                    currentHistoryIndex = index;
                }
                
                // Update page indicators
                updatePageIndicators(page);
                
                // Update navigation buttons
                updateHistoryButtons();
            }
        }

        // Go back in history
        function goBack() {
            if (currentHistoryIndex > 0) {
                currentHistoryIndex--;
                const page = historyStack[currentHistoryIndex];
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector(`a[data-page="${page}"]`).classList.add('active');
                
                // Show the page
                showPage(page);
                
                // Update browser history
                window.history.pushState({ page }, '', `#${page}`);
                
                // Update page indicators
                updatePageIndicators(page);
                
                // Update navigation buttons
                updateHistoryButtons();
            }
        }

        // Go forward in history
        function goForward() {
            if (currentHistoryIndex < historyStack.length - 1) {
                currentHistoryIndex++;
                const page = historyStack[currentHistoryIndex];
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector(`a[data-page="${page}"]`).classList.add('active');
                
                // Show the page
                showPage(page);
                
                // Update browser history
                window.history.pushState({ page }, '', `#${page}`);
                
                // Update page indicators
                updatePageIndicators(page);
                
                // Update navigation buttons
                updateHistoryButtons();
            }
        }

        // Update history navigation buttons state
        function updateHistoryButtons() {
            const canGoBack = currentHistoryIndex > 0;
            const canGoForward = currentHistoryIndex < historyStack.length - 1;
            
            // Update all back buttons
            [backBtnEvents, backBtnDashboard, backBtnClubs, backBtnSupport].forEach(btn => {
                btn.disabled = !canGoBack;
            });
            
            // Update all forward buttons
            [forwardBtnEvents, forwardBtnDashboard, forwardBtnClubs, forwardBtnSupport].forEach(btn => {
                btn.disabled = !canGoForward;
            });
        }

        // Update page indicators
        function updatePageIndicators(page) {
            const pageNames = {
                'home': 'Home',
                'events': 'Events',
                'dashboard': 'Dashboard',
                'clubs': 'Clubs',
                'support': 'Support'
            };
            
            currentPageIndicatorEvents.textContent = pageNames[page] || 'Events';
            currentPageIndicatorDashboard.textContent = pageNames[page] || 'Dashboard';
            currentPageIndicatorClubs.textContent = pageNames[page] || 'Clubs';
            currentPageIndicatorSupport.textContent = pageNames[page] || 'Support';
        }

        // Render events to the grid
        function renderEvents(eventsToRender, gridElement) {
            gridElement.innerHTML = '';
            
            // Filter by status if needed
            if (currentEventStatusFilter !== 'all') {
                eventsToRender = eventsToRender.filter(event => event.status === currentEventStatusFilter);
            }
            
            if (eventsToRender.length === 0) {
                gridElement.innerHTML = '<p class="no-events">No events match your criteria. Try adjusting your filters.</p>';
                return;
            }
            
            eventsToRender.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                eventCard.setAttribute('data-id', event.id);
                
                // Determine status badge
                let statusBadge = '';
                if (event.status === 'ongoing') {
                    statusBadge = '<span class="event-status status-ongoing">Ongoing</span>';
                } else if (event.status === 'upcoming') {
                    statusBadge = '<span class="event-status status-upcoming">Upcoming</span>';
                } else if (event.status === 'completed') {
                    statusBadge = '<span class="event-status status-completed">Completed</span>';
                }
                
                // Determine button text
                let buttonText = 'View Details';
                if (event.status === 'upcoming' && !event.enrolled) {
                    buttonText = 'Enroll Now';
                } else if (event.enrolled) {
                    buttonText = 'Enrolled';
                }
                
                eventCard.innerHTML = `
                    <div class="event-image">
                        ${event.image.includes('.png') || event.image.includes('.jpg') || event.image.includes('.jpeg') || event.image.includes('.gif') 
                            ? `<img src="${event.image}" alt="${event.title}" style="width: 100%; height: 100%; object-fit: cover;">` 
                            : `<i class="${event.image}"></i>`}
                    </div>
                    <div class="event-content">
                        ${statusBadge}
                        <span class="event-category">${event.category}</span>
                        <h3 class="event-title">${event.title}</h3>
                        <p>${event.description.substring(0, 100)}...</p>
                        <div class="event-meta">
                            <div><i class="far fa-calendar"></i> ${formatDate(event.date)}</div>
                            <div><i class="far fa-clock"></i> ${event.time}</div>
                        </div>
                        <div class="event-meta">
                            <div><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
                        </div>
                        <div class="event-actions">
                            <button class="btn rsvp-btn ${event.enrolled ? 'btn-success' : ''}" data-id="${event.id}">
                                ${buttonText}
                            </button>
                            <span class="rsvp-count">${event.rsvpCount} enrolled</span>
                        </div>
                    </div>
                `;
                
                gridElement.appendChild(eventCard);
            });
            
            // Add event listeners to event cards
            gridElement.querySelectorAll('.event-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('rsvp-btn')) {
                        const eventId = parseInt(card.getAttribute('data-id'));
                        showEventDetails(eventId);
                    }
                });
            });
            
            // Add event listeners to RSVP buttons
            gridElement.querySelectorAll('.rsvp-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const eventId = parseInt(e.target.getAttribute('data-id'));
                    const event = events.find(ev => ev.id === eventId);
                    
                    if (event.status === 'upcoming' && !event.enrolled) {
                        enrollInEventFromCard(eventId);
                    } else {
                        showEventDetails(eventId);
                    }
                });
            });
        }

        // Render clubs to the grid
        function renderClubs(clubsToRender) {
            clubsGrid.innerHTML = '';
            
            if (clubsToRender.length === 0) {
                clubsGrid.innerHTML = '<p class="no-clubs">No clubs match your criteria.</p>';
                return;
            }
            
            clubsToRender.forEach(club => {
                const clubCard = document.createElement('div');
                clubCard.className = 'card';
                
                clubCard.innerHTML = `
                    <div class="event-image">
                        ${club.image && (club.image.endsWith('.png') || club.image.endsWith('.jpg') || club.image.endsWith('.jpeg') || club.image.endsWith('.gif')) 
                            ? `<img src="${club.image}" alt="${club.name}">` 
                            : `<i class="${club.image}"></i>`}
                    </div>
                    <div class="event-content">
                        <span class="event-category">${club.category}</span>
                        <h3 class="event-title">${club.name}</h3>
                        <p>${club.description}</p>
                        <div class="event-meta">
                            <div><i class="fas fa-users"></i> ${club.members} members</div>
                        </div>
                        <div class="event-actions">
                            <button class="btn join-btn ${club.isMember ? 'btn-success' : ''}" data-id="${club.id}">
                                ${club.isMember ? 'Joined' : 'Join Club'}
                            </button>
                        </div>
                    </div>
                `;
                
                clubsGrid.appendChild(clubCard);
            });
            
            // Add event listeners to Join buttons
            clubsGrid.querySelectorAll('.join-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const clubId = parseInt(e.target.getAttribute('data-id'));
                    toggleClubMembership(clubId);
                });
            });
        }

        // Render events for dashboard
        function renderDashboardEvents() {
            // Upcoming events (user has enrolled)
            const upcoming = events.filter(event => event.enrolled && event.status !== 'completed');
            upcomingEvents.innerHTML = '';
            
            if (upcoming.length === 0) {
                upcomingEvents.innerHTML = '<p>You haven\'t enrolled in any upcoming events yet.</p>';
            } else {
                upcoming.forEach(event => {
                    const eventItem = document.createElement('div');
                    eventItem.className = 'card';
                    
                    eventItem.innerHTML = `
                        <h4>${event.title}</h4>
                        <div class="event-meta">
                            <div><i class="far fa-calendar"></i> ${formatDate(event.date)}</div>
                            <div><i class="far fa-clock"></i> ${event.time}</div>
                        </div>
                        <div class="event-actions">
                            <button class="btn btn-outline" data-id="${event.id}">View Details</button>
                        </div>
                    `;
                    
                    upcomingEvents.appendChild(eventItem);
                });
            }
            
            // Recommended events (based on user interests)
            const recommended = events.filter(event => !event.enrolled && event.status === 'upcoming').slice(0, 3);
            recommendedEvents.innerHTML = '';
            
            if (recommended.length === 0) {
                recommendedEvents.innerHTML = '<p>No recommended events at this time.</p>';
            } else {
                recommended.forEach(event => {
                    const eventItem = document.createElement('div');
                    eventItem.className = 'card';
                    
                    eventItem.innerHTML = `
                        <h4>${event.title}</h4>
                        <div class="event-meta">
                            <div><i class="far fa-calendar"></i> ${formatDate(event.date)}</div>
                            <div><i class="far fa-clock"></i> ${event.time}</div>
                        </div>
                        <p>${event.description.substring(0, 100)}...</p>
                        <div class="event-actions">
                            <button class="btn rsvp-btn ${event.enrolled ? 'btn-success' : ''}" data-id="${event.id}">
                                ${event.enrolled ? 'Enrolled' : 'Enroll Now'}
                            </button>
                            <span class="rsvp-count">${event.rsvpCount} enrolled</span>
                        </div>
                    `;
                    
                    recommendedEvents.appendChild(eventItem);
                });
            }
            
            // Add event listeners to dashboard buttons
            document.querySelectorAll('#upcomingEvents .btn, #recommendedEvents .btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const eventId = parseInt(e.target.getAttribute('data-id'));
                    if (e.target.textContent.includes('Enroll')) {
                        enrollInEventFromCard(eventId);
                    } else {
                        showEventDetails(eventId);
                    }
                });
            });
        }

        // Show event details in modal
        function showEventDetails(eventId) {
            const event = events.find(e => e.id === eventId);
            if (!event) return;
            
            currentEvent = event;
            
            // Update modal content
            document.getElementById('modalEventTitle').textContent = event.title;
            
            // Update event image
            const modalEventImage = document.getElementById('modalEventImage');
            if (event.image && (event.image.includes('.png') || event.image.includes('.jpg') || event.image.includes('.jpeg') || event.image.includes('.gif'))) {
                modalEventImage.innerHTML = `<img src="${event.image}" alt="${event.title}">`;
            } else {
                modalEventImage.innerHTML = `<i class="${event.image}"></i>`;
            }
            
            // Update status badge
            const statusElement = document.getElementById('modalEventStatus');
            statusElement.textContent = event.status.charAt(0).toUpperCase() + event.status.slice(1);
            statusElement.className = 'event-status';
            if (event.status === 'ongoing') {
                statusElement.classList.add('status-ongoing');
            } else if (event.status === 'upcoming') {
                statusElement.classList.add('status-upcoming');
            } else if (event.status === 'completed') {
                statusElement.classList.add('status-completed');
            }
            
            document.getElementById('modalEventDate').textContent = formatDate(event.date);
            document.getElementById('modalEventTime').textContent = `${event.time} - ${event.endTime}`;
            document.getElementById('modalEventLocation').textContent = event.location;
            document.getElementById('modalEventParticipants').textContent = `${event.rsvpCount}/${event.capacity}`;
            document.getElementById('modalEventDescription').textContent = event.description;
            document.getElementById('modalRsvpCount').textContent = `${event.rsvpCount} people enrolled`;
            
            // Update enroll button
            const enrollBtn = document.getElementById('enrollBtn');
            if (event.status === 'upcoming' && !event.enrolled) {
                enrollBtn.textContent = 'Enroll Now';
                enrollBtn.disabled = false;
                enrollBtn.classList.remove('btn-success');
            } else if (event.enrolled) {
                enrollBtn.textContent = 'Already Enrolled';
                enrollBtn.disabled = true;
                enrollBtn.classList.add('btn-success');
            } else if (event.status === 'completed') {
                enrollBtn.textContent = 'Event Completed';
                enrollBtn.disabled = true;
            } else {
                enrollBtn.textContent = 'Enrollment Closed';
                enrollBtn.disabled = true;
            }
            
            // Show/hide rating section
            if (event.status === 'completed' && event.enrolled) {
                ratingSection.classList.remove('hidden');
                userRating = 0;
                resetRatingStars();
            } else {
                ratingSection.classList.add('hidden');
            }
            
            // Show modal
            eventDetailModal.classList.remove('hidden');
        }

        // Enroll in event from modal
        function enrollInEvent() {
            if (!currentEvent) return;

            // If it's the Hackathon event, open the Google Sheets link
            if (currentEvent.title === "Hackathon 2K25") {
                window.open("https://docs.google.com/spreadsheets/d/17MkCeV_q9qNymZoNulXdGJdTiJdTu5hUdXClwcUUltc/edit?usp=sharing", "_blank");
                return;
            }
            
            if (currentEvent.status === 'upcoming' && !currentEvent.enrolled) {
                currentEvent.enrolled = true;
                currentEvent.rsvpCount++;
                
                // Update UI
                enrollBtn.textContent = 'Already Enrolled';
                enrollBtn.disabled = true;
                enrollBtn.classList.add('btn-success');
                document.getElementById('modalRsvpCount').textContent = `${currentEvent.rsvpCount} people enrolled`;
                
                // Re-render events
                renderEvents(events, eventsGrid);
                renderEvents(events, eventsGridEvents);
                renderDashboardEvents();
                
                // Show notification
                showNotification('Enrollment Confirmed', `You've successfully enrolled in ${currentEvent.title}`);
            }
        }

        // Enroll in event from card
        function enrollInEventFromCard(eventId) {
            const event = events.find(e => e.id === eventId);
            if (!event) return;
            
            // If it's the Hackathon event, open the Google Sheets link
            if (event.title === "Hackathon 2K25") {
                window.open("https://docs.google.com/spreadsheets/d/17MkCeV_q9qNymZoNulXdGJdTiJdTu5hUdXClwcUUltc/edit?usp=sharing", "_blank");
                return;
            }
            
            if (event.status === 'upcoming' && !event.enrolled) {
                event.enrolled = true;
                event.rsvpCount++;
                
                // Re-render events
                renderEvents(events, eventsGrid);
                renderEvents(events, eventsGridEvents);
                renderDashboardEvents();
                
                // Show notification
                showNotification('Enrollment Confirmed', `You've successfully enrolled in ${event.title}`);
            }
        }

        // Set rating stars
        function setRating(rating) {
            userRating = rating;
            const stars = eventRating.querySelectorAll('.star');
            
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        // Reset rating stars
        function resetRatingStars() {
            const stars = eventRating.querySelectorAll('.star');
            stars.forEach(star => {
                star.classList.remove('active');
            });
        }

        // Submit rating
        function submitRating() {
            if (!currentEvent || userRating === 0) return;
            
            // Update event rating
            const totalRating = currentEvent.rating.average * currentEvent.rating.count;
            currentEvent.rating.count++;
            currentEvent.rating.average = (totalRating + userRating) / currentEvent.rating.count;
            
            // Hide rating section
            ratingSection.classList.add('hidden');
            
            // Show notification
            showNotification('Rating Submitted', `Thank you for rating ${currentEvent.title}`);
        }

        // Toggle club membership
        function toggleClubMembership(clubId) {
            const club = clubs.find(c => c.id === clubId);
            if (club) {
                club.isMember = !club.isMember;
                club.members += club.isMember ? 1 : -1;
                
                // Re-render clubs
                renderClubs(clubs);
                
                // Show notification
                showNotification(
                    club.isMember ? 'Club Joined' : 'Club Left',
                    `You've ${club.isMember ? 'joined' : 'left'} ${club.name}`
                );
            }
        }

        // Apply filters to events
        function applyFilters() {
            const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                .map(cb => cb.value);
            
            const dateFilter = document.querySelector('input[name="date"]:checked').value;
            
            let filteredEvents = events.filter(event => {
                // Category filter
                if (selectedCategories.length > 0 && !selectedCategories.includes(event.category)) {
                    return false;
                }
                
                // Date filter
                if (dateFilter !== 'all') {
                    const eventDate = new Date(event.date);
                    const today = new Date();
                    
                    switch(dateFilter) {
                        case 'today':
                            if (eventDate.toDateString() !== today.toDateString()) return false;
                            break;
                        case 'week':
                            const weekFromNow = new Date(today);
                            weekFromNow.setDate(today.getDate() + 7);
                            if (eventDate < today || eventDate > weekFromNow) return false;
                            break;
                        case 'month':
                            const monthFromNow = new Date(today);
                            monthFromNow.setMonth(today.getMonth() + 1);
                            if (eventDate < today || eventDate > monthFromNow) return false;
                            break;
                    }
                }
                
                return true;
            });
            
            // Determine which events grid to update
            const eventsPage = document.getElementById('eventsPage');
            if (eventsPage.classList.contains('hidden')) {
                renderEvents(filteredEvents, eventsGrid);
            } else {
                renderEvents(filteredEvents, eventsGridEvents);
            }
        }

        // Reset all filters
        function resetFilters() {
            document.querySelectorAll('input[name="category"]').forEach(cb => cb.checked = true);
            document.querySelector('input[name="date"][value="all"]').checked = true;
            
            // Determine which events grid to update
            const eventsPage = document.getElementById('eventsPage');
            if (eventsPage.classList.contains('hidden')) {
                renderEvents(events, eventsGrid);
            } else {
                renderEvents(events, eventsGridEvents);
            }
        }

        // Search events by title
        function searchEvents() {
            const query = this.value.toLowerCase();
            const filteredEvents = events.filter(event => 
                event.title.toLowerCase().includes(query) || 
                event.description.toLowerCase().includes(query)
            );
            
            // Determine which events grid to update
            const eventsPage = document.getElementById('eventsPage');
            if (eventsPage.classList.contains('hidden')) {
                renderEvents(filteredEvents, eventsGrid);
            } else {
                renderEvents(filteredEvents, eventsGridEvents);
            }
        }

        // Show add event modal
        function showAddEventModal() {
            addEventModal.classList.remove('hidden');
        }

        // Handle add event form submission
        function handleAddEvent(e) {
            e.preventDefault();
            
            const newEvent = {
                id: events.length + 1,
                title: document.getElementById('eventTitle').value,
                category: document.getElementById('eventCategory').value,
                date: document.getElementById('eventDate').value,
                time: document.getElementById('eventTime').value,
                endTime: document.getElementById('eventEndTime').value,
                location: document.getElementById('eventLocation').value,
                description: document.getElementById('eventDescription').value,
                rsvpCount: 0,
                capacity: parseInt(document.getElementById('eventCapacity').value),
                enrolled: false,
                image: document.getElementById('eventImage').value || getEventIcon(document.getElementById('eventCategory').value),
                status: document.getElementById('eventStatus').value,
                rating: {
                    average: 0,
                    count: 0
                }
            };
            
            events.push(newEvent);
            
            // Re-render events
            renderEvents(events, eventsGrid);
            renderEvents(events, eventsGridEvents);
            renderDashboardEvents();
            
            // Close modal and reset form
            addEventModal.classList.add('hidden');
            addEventForm.reset();
            
            // Show notification
            showNotification('Event Added', `Successfully added "${newEvent.title}"`);
        }

        // Get event icon based on category
        function getEventIcon(category) {
            const icons = {
                'hackathon': 'fas fa-laptop-code',
                'gaming': 'fas fa-gamepad',
                'workshop': 'fas fa-chalkboard-teacher',
                'seminar': 'fas fa-microphone',
                'competition': 'fas fa-trophy',
                'social': 'fas fa-users'
            };
            
            return icons[category] || 'fas fa-calendar-alt';
        }

        // Show notification
        function showNotification(title, message) {
            // Create a temporary notification element
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: var(--success);
                color: white;
                padding: 15px 20px;
                border-radius: var(--border-radius);
                box-shadow: var(--box-shadow);
                z-index: 10000;
                max-width: 300px;
                animation: slideInRight 0.3s ease;
            `;
            
            notification.innerHTML = `
                <strong>${title}</strong>
                <div>${message}</div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Format date for display
        function formatDate(dateString) {
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', init);
