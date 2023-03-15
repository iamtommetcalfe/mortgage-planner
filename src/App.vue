<template>

  <div>
    <header id="headerContainer" class="text-center shadow-sm p-4 mb-3">
      <MortgagePlannerLogo />
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
import MonthlyRepaymentCalculator from '@/components/MonthlyRepaymentCalculator.vue'
import MortgagePlannerLogo from "@/components/layout/MortgagePlannerLogo.vue";

export default {
  name: 'App',
  components: {
    MortgagePlannerLogo,
    MonthlyRepaymentCalculator
  }
}
</script>

<style>
#repaymentCalculatorContainer form {
  width:350px;
}
</style>