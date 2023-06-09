<template>
  <div class="sidebar" :class="{ 'sidebar-visible': showSidebar }">
      <div class="sidebar-toggle" @click="toggleSidebar">
        <i class="fa fa-bars"></i>
      </div>
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <span @click="toggleSubMenu(item)">
            {{ item.title }}
            <i v-if="item.subMenu" :class="{'fa fa-angle-down': !item.showSubMenu, 'fa fa-angle-up': item.showSubMenu}"></i>
          </span>
          <ul v-if="item.showSubMenu">
            <li v-for="subItem in item.subMenu" :key="subItem.id" @click="selectMenuItem(subItem)">
              {{ subItem.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuItems: [
        { id: 1, title: 'Página 1', route: '/pagina1' },
        { id: 2, title: 'Página 2', subMenu: [
          { id: 21, title: 'Subpágina 2.1', route: '/pagina2/subpagina1' },
          { id: 22, title: 'Subpágina 2.2', route: '/pagina2/subpagina2' }
        ]},
        { id: 3, title: 'Página 3', route: '/pagina3' },
      ],
      showSidebar: false
    }
  },
  methods: {
    selectMenuItem(item) {
      this.selectedMenuItem = item;

      this.showSidebar = false;

      // Navegar para a rota da página selecionada
      this.$router.push(item.route);
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    toggleSubMenu(item) {
      item.showSubMenu = !item.showSubMenu;
    },
  },
};
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  transition: transform 0.3s;
  transform: translateX(-100%);
}

.sidebar-visible {
  transform: translateX(0);
}

.sidebar-toggle {
  text-align: right;
  padding: 10px;
  cursor: pointer;
}

.content {
  padding: 20px;
}
</style>
