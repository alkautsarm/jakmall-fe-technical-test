<template>
  <div
    @click="changeValue"
    class="form__inputGroup form__inputGroupRadio form__inputGroupRadio--empty"
    :class="radioModel === radioValue ?
      'form__inputGroup--success form__inputGroupRadio--success' :
      ''
    "
  >
    <div class="form__inputDetailRadio">
      <label class="form__inputLabelRadio" :for="radioValue.value">
        {{ radioLabel }}
      </label>
      <span>{{ radioDetail }}</span>
    </div>

    <input
      v-model="model"
      :value="radioValue"
      type="radio"
      class="form__inputRadio"
      :id="radioValue.value"
    >
    <img
      v-if="radioModel.value === radioValue.value"
      src="@/assets/icons/success.svg"
      alt="Chosen radio button icon"
      class="baseRadioButton__check"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseRadioButton',
  props: {
    radioLabel: {
      type: String,
      required: true
    },
    radioDetail: {
      type: String,
      required: true
    },
    radioModel: {
      type: Object,
      required: true
    },
    radioValue: {
      type: Object,
      required: true
    },
    formKey: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      model: this.radioModel
    }
  },
  watch: {
    radioModel (newValue) {
      this.model = newValue
    }
  },
  methods: {
    changeValue () {
      const data = {
        formValue: this.radioValue,
        formKey: this.formKey
      }
      this.$emit('updateValue', data)
    }
  }
}
</script>

<style lang="stylus" scoped>
.baseRadioButton__check
  width: 18px
</style>
