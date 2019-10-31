<template>
  <div class="col-6">
    <div class="middle container no-bg">
      <h3>Hypotheek vorm</h3>
      <hr />
      Een hypotheek is een lening. De manier waarop u deze terugbetaalt, hangt
      af van de hypotheekvorm. U kunt kiezen uit verschillende hypotheekvormen.
      <br />
      <br />
      Welk soort hypotheek kiest u?
      <div id="#abn-radio d-flex ">
        <Hypotheek
          :has-icon="true"
          tile-class="mr-0 justify-content-start"
          :has-usps="true"
          :mortgages="mortgages"
        >
        </Hypotheek>
      </div>
      <b-button variant="primary" class="float-right mb-2">
        OK, Opslaan
      </b-button>
    </div>
  </div>
</template>

<script>
// Components
import Hypotheek from '~/components/Hypotheek'

export default {
  layout: 'situation',
  name: 'Situatie',
  components: {
    Hypotheek
  },
  data() {
    return {
      mortgages: [
        {
          id: 1,
          title: 'Lineair',
          usps: ['Kenmerk #1', 'Kenmerk #2', 'Kenmerk #3'],
          icon: 'pr-building-house'
        },
        {
          id: 2,
          title: 'Annuitaïr',
          usps: ['Kenmerk #1', 'Kenmerk #2', 'Kenmerk #3'],
          icon: 'pr-building-house'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
