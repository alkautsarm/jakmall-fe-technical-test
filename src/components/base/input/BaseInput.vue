<template>
  <div>
    <div
      class="form__inputGroup"
      :class="checkEmptinessAndValidity"
    >
      <label v-if="model" class="form__inputLabel">
        {{ inputLabel }}
      </label>
      <img
        v-if="model"
        :src="require(`@/assets/icons/${isInputTrue ? 'success' : 'wrong'}.svg`)"
        alt="Input validation icon"
        class="form__validationIcon"
      >
      <input
        v-model="model"
        @input="changeValue"
        :type="inputType"
        :placeholder="inputPlaceholder"
        :disabled="disabledStatus"
        class="form__input"
      >
    </div>

    <slot name="errorMessage"></slot>
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
    },
    isInputTrue: {
      type: Boolean,
      default: true
    },
    disabledStatus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      model: this.inputModel
    }
  },
  computed: {
    checkEmptinessAndValidity () {
      if (this.model) {
        if (this.isInputTrue) {
          return 'form__inputGroup--filled form__inputGroup--success'
        }
        return 'form__inputGroup--filled form__inputGroup--wrong'
      }

      if (this.isInputTrue) {
        return 'form__inputGroup--empty'
      }
      return 'form__inputGroup--empty form__inputGroup--wrong'
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
