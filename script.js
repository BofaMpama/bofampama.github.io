const sidebar = document.querySelector('.sidebar');

function showSidebar(){
    sidebar.style.display = 'flex';
    sidebar.style.transition = '1s';
}

function closeSidebar() {
    sidebar.style.display = 'none';
    sidebar.style.transition = '1s';

}