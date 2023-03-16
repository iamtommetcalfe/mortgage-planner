<template>

  <div>
    <header id="headerContainer" class="text-center shadow-sm p-4 mb-3">
      <MortgagePlannerLogo />
    </header>
   <div class="flex flex-row">
     <section id="mainContent" class="basis-3/4 p-4">
       <MainContent />
     </section>
     <section id="rightContent" class="basis-1/4 p-4">
       <div id="repaymentCalculatorContainer" class="">
         <MonthlyRepaymentCalculator />
       </div>
     </section>
   </div>
    <footer>

    </footer>
  </div>
</template>

<script>
import MonthlyRepaymentCalculator from '@/components/MonthlyRepaymentCalculator.vue'
import MortgagePlannerLogo from "@/components/layout/MortgagePlannerLogo.vue";
import MainContent from "@/components/layout/MainContent.vue";

export default {
  name: 'App',
  components: {
    MainContent,
    MortgagePlannerLogo,
    MonthlyRepaymentCalculator
  }
}
</script>

<style>
#repaymentCalculatorContainer form {
  /*width:350px;*/
}
</style>