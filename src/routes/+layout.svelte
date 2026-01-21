<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
		<title>Bofa Mpama | Web Developer </title>
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
