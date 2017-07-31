<template>
  <div id="app">
    <header-bar></header-bar>

    <main>
      <server-list></server-list>
    </main>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'
  import ServerList from './components/ServerList.vue'

  export default {
    name: 'haul',
    components: { HeaderBar, ServerList }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  :root {
    --npm-red: #cb3837;
    --npm-red-dark: #ab1817;
    --main-bg-color: #f1f1f1;
    --dark-bg-color: #e1e1e1;
    --header-background: #2a333c;
    --header-color: var(--main-bg-color);
    --header-height: 10em;
    --code-background: #2a333c;
    --code-color: #f1f1f1;
    --svg-fill: #2a333c;
    --svg-fill-red: var(--npm-red);
    --svg-fill-green: #399039;
    --svg-fill-white: #ffffff;
    --svg-fill-bright: var(--main-bg-color);
    --border-color: #ddd;
  }
  * {
    margin  : 0;
    padding : 0;
    box-sizing : border-box;
  }
  html,
  body {
    height: 100%;
  }
  body {
    background-color: var(--header-background);
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
  }
  main {
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    height: 100vh;
    padding: 1em;
    color: var(--code-color);
  }
    main .scrollContainer {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
    }

  svg {
    fill: var(--svg-fill);
  }
  .verticalDefaultMargin {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  ::-webkit-scrollbar {
    height: .75rem;
    width: .75rem;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 .5rem var(--npm-red);
    border: .25rem solid transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  @keyframes infinite-spinning {
    from {
      transform: rotate( 0deg );
    }
    to {
      transform: rotate( 360deg );
    }
  }
  .anim-infiniteSpinning {
    animation: infinite-spinning 1.25s infinite;
  }
  .trans-slideDown-transition {
    transition:
      transform .275s ease-in-out,
      opacity .3s ease-in-out;
    will-change: transform;
    transform: translate( 0, 0 );
    opacity: 1;
  }

    .trans-slideDown-enter,
    .trans-slideDown-leave {
      transform: translate( 0, -75% );
      opacity: .125;
    }

    .trans-slideDown-leave {
      transition : none;
    }
</style>
