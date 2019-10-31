<template>
  <div class="col-6">
    <div class="middle container no-bg">
      <h3>Soort Hypotheek</h3>
      <hr />
      Bij ABN AMRO kunt u kiezen uit 2 verschillende hypotheken: de Budget
      Hypotheek en de Woning Hypotheek
      <br />
      <br />
      Uw passeerdatum: 20-08-2019 (binnen 3 maanden)
      <b-form-group>
        <radio-button
          :has-icon="true"
          tile-class="mr-0 justify-content-start"
          :has-usps="true"
          :mortgages="mortgages"
        >
        </radio-button>
      </b-form-group>
    </div>
  </div>
</template>

<script>
// Components
import RadioButton from '~/components/RadioButton'

export default {
  layout: 'situation',
  name: 'Situatie',
  components: {
    RadioButton
  },
  data() {
    return {
      mortgages: [
        {
          id: 1,
          title: 'Budget hypotheek',
          usps: [
            'Offerte 3 maanden geldig',
            'Vaste rente na ondertekenen',
            'U betaalt 0,10% minder rente'
          ],
          icon: 'pr-building-house'
        },
        {
          id: 2,
          title: 'Woning hypotheek',
          usps: [
            'Offerte 3 maanden geldig',
            'Vaste rente na ondertekenen',
            'U betaalt 0,10% minder rente'
          ],
          icon: 'pr-paper-marker'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
