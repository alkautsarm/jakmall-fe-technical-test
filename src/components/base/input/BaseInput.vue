<template>
  <div
    class="form__inputGroup"
    :class="model ? 'form__inputGroup--filled' : 'form__inputGroup--empty'"
  >
    <label v-if="model" class="form__inputLabel">
      {{ inputLabel }}
    </label>
    <input
      v-model="model"
      @input="changeValue"
      :type="inputType"
      :placeholder="inputPlaceholder"
      class="form__input"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    inputLabel: {
      type: String,
      required: true
    },
    inputPlaceholder: {
      type: String,
      required: true
    },
    inputModel: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: 'text'
    },
    formKey: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      model: this.inputModel
    }
  },
  watch: {
    inputModel (newValue) {
      this.model = newValue
    }
  },
  methods: {
    changeValue () {
      const data = {
        formValue: this.model,
        formKey: this.formKey
      }
      this.$emit('updateValue', data)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
