<script>
	import { page } from '$app/stores'
	let windowWidth
</script>

<svelte:window bind:innerWidth={windowWidth}/>
<header>
		<nav>
		{#if windowWidth > 610}
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>
		{/if}
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/whisky'}><a sveltekit:prefetch href="/whisky">Whisky</a></li>
			<li class:active={$page.url.pathname === '/rum'}><a sveltekit:prefetch href="/rum">Rum</a></li>
			<li class:active={$page.url.pathname === '/port-sherry'}><a sveltekit:prefetch href="/port-sherry">Port & Sherry</a></li>
			<li class:active={$page.url.pathname === '/bier'}><a sveltekit:prefetch href="/bier">Bier</a></li>
	
		</ul>
		{#if windowWidth > 610}
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		{/if}
	</nav>

</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		width: min(30em, 100% );
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: space-between;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: clamp(0.75rem, 3.3vw, 0.9rem);
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
