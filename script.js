const profileBtn = document.querySelector('.profile-btn');
const profileMessage = document.querySelector('.profile-message');
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
const taskItems = document.querySelectorAll('.tasks-list li');

profileBtn.addEventListener('click', () => {
  profileMessage.textContent = 'Profile details coming soon.';
});

sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach((item) => {
      item.classList.remove('active');
    });

    link.classList.add('active');
  });
});

taskItems.forEach((task) => {
    task.addEventListener('click', () => {
        task.classList.toggle('completed')
    })
})
