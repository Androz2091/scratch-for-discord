<template>
	<b-nav-item-dropdown :text="$t('theme.title')" right>
		<b-dropdown-item @click="changeTheme('light')">Light</b-dropdown-item>
		<b-dropdown-item @click="changeTheme('dark')">Dark</b-dropdown-item>
	</b-nav-item-dropdown>
</template>

<script>
export default {
	name: "thememenu",
	methods: {
		changeTheme(theme) {
			this.$store.commit("setTheme", {
				newTheme: theme
			});
			this.reloadWorkspace();
		}
	}
};
</script>
