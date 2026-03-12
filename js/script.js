// 页面导航
function navigateTo(page) {
  // 隐藏所有页面
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  
  // 显示目标页面
  document.getElementById(page).classList.remove('hidden');
  
  // 更新导航栏活动状态
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('bg-blue-100', 'text-blue-700');
  });
  
  // 添加活动状态到当前链接
  event.target.classList.add('bg-blue-100', 'text-blue-700');
  
  // 触发滚动动画
  setTimeout(() => {
    checkFadeElements();
  }, 100);
}

// 在线时间显示
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  document.getElementById('time').textContent = timeString;
}

// 滚动动画
function checkFadeElements() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
}

// 导航栏滚动效果
function handleScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  checkFadeElements();
}

// 初始化时间显示
setInterval(updateTime, 1000);
updateTime();

// 初始化页面
window.onload = function() {
  // 显示首页
  document.getElementById('home').classList.remove('hidden');
  
  // 初始检查滚动元素
  checkFadeElements();
  
  // 添加滚动事件监听
  window.addEventListener('scroll', handleScroll);
};