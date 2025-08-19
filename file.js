// [PRIVATE COMMENT] Sidebar show/hide functions extracted into shared script.
// [PRIVATE COMMENT] Included on every page for consistency.
(function(){
  function showSidebar() {
    var sb = document.querySelector('.sidebar');
    if (sb) sb.style.display = 'flex';
  }
  function hideSidebar() {
    var sb = document.querySelector('.sidebar');
    if (sb) sb.style.display = 'none';
  }
  window.showSidebar = showSidebar;
  window.hideSidebar = hideSidebar;
})();