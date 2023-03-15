<template>

  <div>
    <header id="headerContainer">
      <Header/>
    </header>
    <section id="mainContent">
      <div id="mainContentWrapper">
        <div id="repaymentCalculatorContainer" class="grid place-items-center">
          <MonthlyRepaymentCalculator />
        </div>
      </div>
    </section>
    <footer>

    </footer>
  </div>
</template>

<script>
import MonthlyRepaymentCalculator from './components/MonthlyRepaymentCalculator.vue'

export default {
  name: 'App',
  components: {
    MonthlyRepaymentCalculator
  }
}
</script>

<style>
#repaymentCalculatorContainer form {
  width:350px;
}
</style>