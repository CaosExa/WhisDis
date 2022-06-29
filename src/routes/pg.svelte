<script>
import { testStore } from '../stores.js'

function inc() {
		testStore.update(n => n + 1);
}
</script>

<h1>Playground</h1>
<section>
  <h2>
    The Store Value is: {$testStore}
  </h2>
  <div>
    <button on:click={inc}>INC</button>
  </div>
</section>