<template>
  <div class="bg-white rounded-lg p-4 shadow-md">
    <form @submit.prevent="calculatePayments">
      <div class="mb-4">
        <label class="block font-medium mb-2" for="loanAmount">Loan amount:</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span class="text-gray-500" v-text="currencySymbol"></span>
          </div>
          <input class="w-full pl-10 pr-3 py-2 rounded border border-gray-300 text-right" type="text" v-model.number="loanAmount" id="loanAmount">
        </div>
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-2" for="interestRate">Interest rate:</label>
        <input class="w-full border rounded py-2 px-3" type="number" step="0.01" v-model="interestRate" id="interestRate">
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-2" for="yearsToRepay">Years to repay:</label>
        <select class="w-full border rounded py-2 px-3" type="number" v-model="yearsToRepay" id="yearsToRepay">
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-2" for="currency">Currency:</label>
        <select class="w-full border rounded py-2 px-3" v-model="currency" id="currency">
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded" type="submit">Calculate</button>
    </form>

    <div class="mt-4">
      <p v-if="monthlyPayment" class="font-medium mb-2">Monthly payment:</p>
      <p v-if="monthlyPayment" class="font-medium text-2xl mb-4">{{ displayCurrency(monthlyPayment) }}</p>

      <p v-if="totalPayment" class="font-medium mb-2">Total payment:</p>
      <p v-if="totalPayment" class="font-medium text-2xl">{{ displayCurrency(totalPayment) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loanAmount: null,
      interestRate: 4.59,
      yearsToRepay: 25,
      monthlyPayment: null,
      totalPayment: null,
      currency: 'GBP',
      years: []
    }
  },
  computed: {
    currencySymbol() {
      return {
        'GBP': '£',
        'USD': '$',
        'EUR': '€'
      }[this.currency];
    },
    interest() {
      return {
        'GBP': '£',
        'USD': '$',
        'EUR': '€'
      }[this.interestRate];
    }
  },
  methods: {
    calculatePayments() {
      const r = this.interestRate / 1200; // Convert annual interest rate to monthly rate
      const n = this.yearsToRepay * 12; // Convert years to months
      const numerator = this.loanAmount * r * Math.pow(1 + r, n);
      const denominator = Math.pow(1 + r, n) - 1;
      this.monthlyPayment = numerator / denominator;
      this.totalPayment = this.monthlyPayment * n;
    },
    displayCurrency(amount) {
      const formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: this.currency });
      return formatter.format(amount);
    }
  },
  mounted() {
    for (let i = 2; i <= 40; i++) {
      this.years.push(i);
    }
  }
};
</script>