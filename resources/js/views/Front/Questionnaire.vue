<script setup>
import { ref, reactive } from 'vue'
import { mdiBallot, mdiBallotOutline, mdiAccount, mdiMail } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import CheckRadioPicker from '@/components/CheckRadioPicker.vue'
import FilePicker from '@/components/FilePicker.vue'
import HeroBar from '@/components/HeroBar.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection.vue'
import TitledSection from '@/components/TitledSection.vue'
import TitleSubBar from '@/components/TitleSubBar.vue'

const titleStack = ref(['SOBEL HAN & CANNON, LLP'])

const selectOptions = [
  { id: 1, label: 'Business development' },
  { id: 2, label: 'Marketing' },
  { id: 3, label: 'Sales' }
]

const form = reactive({
  landlordName: null,
  email: 'john.doe@example.com',
  phone: '',
  department: selectOptions[0],
  subject: '',
  question: '',
  radio: 'residential',
  checkbox: ['has']
})



const submit = () => {
  //
}
</script>

<template>
  <title-bar :title-stack="titleStack" class="bg-gradient-to-r from-cyan-500 to-blue-500"/>
  <!-- <hero-bar>Questionnaire</hero-bar> -->
  <main-section>

    <card-component
      form
      @submit.prevent="submit"
    >
    <field
        wrap-body
      >
        <check-radio-picker
          v-model="form.radio"
          name="sample-radio"
          type="radio"
          :options="{ residential: 'Residential Property', commercial: 'Commercial Property' }"
        />
      </field>
      <field label="Land Lord's Name"
      help="Owner's name will go here">
        <control
          v-model="form.landlordName"
          placeholder="Land Lord's Name"
        />
      </field>

      <field
        label="Tenant/Tenants’ Name(s):"
        help="Tenant/Tenants’ Name(s):"
      >
        <control
          v-model="form.phone"
          placeholder="Tenant/Tenants’ Name(s)"
        />
      </field>

      <field label="Property Address"
      help="STREET / APARTMENT UNIT (IF APPLICABLE)">
        <control
          v-model="form.landlordName"
          placeholder="Street"
        />
        <control
          v-model="form.landlordName"
          placeholder="APARTMENT UNIT (IF APPLICABLE)"
        />
      </field>
      <field label="City"
      help="City">
        <control
          v-model="form.landlordName"
          placeholder="City"
        />
      </field>
      <field label="Zip"
      help="Zip">
        <control
          v-model="form.landlordName"
          placeholder="Zip"
        />
      </field>

      <divider />

      <field
        label="Question"
        help="Your question. Max 255 characters"
      >
        <control
          type="textarea"
          placeholder="Explain how we can help you"
        />
      </field>



      <divider />
      <title-sub-bar
      title="THE SECTION BELOW MUST BE COMPLETED (CHECK ONE OR THE OTHER):"
    />

    <card-component class="border border-red-700">

<h1 class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">The Landlord <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ has: 'HAS', hasnot: 'HAS NOT'}"
        /> acquired ownership of the property from tenant.</span>

    </h1>

<h1 class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">The Landlord <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ has: 'HAS', hasnot: 'HAS NOT'}"
        /> given tenant(s) an option to purchase the property.</span>

    </h1>

<h1 class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">The Tenant resides at the property pursuant to a(n) <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ written: 'WRITTEN', oral: 'ORAL'}"
        /> lease agreement.</span>

    </h1>

<h1 class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">The Tenant first moved into the property on or_____ was residing at the property when the
landlord took ownership. <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ written: 'WRITTEN', oral: 'ORAL'}"
        /> lease agreement.</span>

    </h1>

<h1 class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">Tenant’s E-Mail <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ written: 'WRITTEN', oral: 'ORAL'}"
        /></span>

    </h1>
<h1 class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">Tenant’s Phone Number: <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ written: 'WRITTEN', oral: 'ORAL'}"
        /></span>

    </h1>
<h1 class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">The Tenant  <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ written: 'IS', oral: 'IS NOT'}"
        /> presently subsidized under a federal or state program.</span>

    </h1>
<p class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">The Landlord
        <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ written: 'HAS', oral: 'HAS NOT'}"
        />
        registered the lease and notified tenant pursuant to the Landlord Registration Act – N.J.S.A. 46:8-27.</span>

    </p>


    </card-component>
      <divider />

      <title-sub-bar
      title="LANDLORD VERIFICATION"
    />

    <card-component class="border border-red-700">
<ol class="list-decimal">
  <li>
    <p class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">I certify that I am the : (Check One) <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ landlord: 'LANDLORD', landlordagent: `LANDLORD's Agent` , generalpartner: `General Partner of the partnership`, authorizedofficer: `Authorized officer of a corporation or limited liability company that owns this property.`}"
        /></span>

    </p>
  </li>
  <li>
    <p class="flex items-center justify-start flex-col md:flex-row text-xl underline text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">I certify that if the property is subject to the Coronavirus Aid, Relief and Economics Sercurity Act ("CARES ACT"), I served the tenant with the 30-Day notice persuant to the CARES ACT to the filing of this instant complaint and have attached same to this verification.</span>

    </p>
  </li>
  <li>
    <p class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">I have read the verified complaint and the information, based on my personal knowledge, is true</span>

    </p>
  </li>
  <li>
    <p class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">The matter in controversy is not the subject of any other court action or arbitration proceeding now pending or contemplated and no other parties should be joined in this action except (list exceptions or indicate NONE):</span>

    </p>
  </li>
  <li>
    <p class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">I certify that foregoing statements made by me are true.</span>

    </p>
  </li>
  <li>
    <p class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">I am aware that if any of the foregoing statements made by me are willfully false, I am subject to the punishment.</span>

    </p>
  </li>
</ol>


<p class="flex items-center justify-start flex-col md:flex-row text-sm text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">At the trial, plantiff will require:
        <field label="An interpreter">
        <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ yes: 'YES', no: 'NO'}"
        />
      </field>
        <field label="If YES, Language:">
        <control
          v-model="form.landlordName"
          placeholder="Interpreter Language"
        />
      </field>
        <field label="An Accomodation for disability">
        <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ yes: 'YES', no: 'NO'}"
        />
      </field>
        <field label="If YES, Required Recommendation:">
        <control
          v-model="form.landlordName"
          placeholder="Required Recommendation"
        />
      </field>
        </span>

    </p>


<field label="Date">
        <control
          v-model="form.landlordName"
          placeholder="date"
        />
      </field>
<field label="Print Name">
        <control
          v-model="form.landlordName"
        />
      </field>

    </card-component>
     <divider />
      <title-sub-bar
      title="Eviction Questionnaire"
      class="uppercase underline"
    />

    <card-component class="border border-red-700">

<ol class="list-decimal">
  <li class="border border-gray-700 m-5 p-5">
    <field label="Landlord Name">
        <control
          v-model="form.landlordName"
          placeholder="Landlord's Name"
        />
      </field>
<field label="Landlord Phone">
        <control
          v-model="form.landlordName"
           placeholder="Landlord's Phone"
        />
      </field>
<field label="Landlord Email">
        <control
          v-model="form.landlordName"
           placeholder="Landlord's Email"
        />
      </field>
  </li>
  <li class="border border-gray-700 m-5 p-5">
    <field label="Defendant(s)/Tenant(s) Name">
        <control
          v-model="form.landlordName"
          placeholder="Defendant(s)/Tenant(s) Name"
        />
      </field>
<field label="Defendant(s)/Tenant(s) Phone">
        <control
          v-model="form.landlordName"
           placeholder="Defendant(s)/Tenant(s) Phone"
        />
      </field>
<field label="Defendant(s)/Tenant(s) Email">
        <control
          v-model="form.landlordName"
           placeholder="Defendant(s)/Tenant(s) Email"
        />
      </field>
  </li>
  <li class="border border-gray-700 m-5 p-5">
    <p class="flex items-center justify-start flex-col md:flex-row text-xl text-gray-700 dark:text-gray-400 mb-12">
      <span class="md:mr-3">Is the rental property subsidized housing? (YES or NO) <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ yes: 'YES', no: 'NO' }"
        />
        If YES, check the box below that applies and SKIP Question #4.

        <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ publichousing: 'PUBLIC HOUSING', section8voucher: 'Section 8 Voucher',section8hap: 'Section 8 HAP Contract',other: 'Other Subsidy Program' }"
        />

        </span>

    </p>
  </li>
  <li class="border border-gray-700 m-5 p-5">
     <field label="Does the town have a rent control ordincance?">
        <check-radio-picker
          v-model="form.checkbox"
          name="sample-checkbox"
          :options="{ yes: 'YES', no: 'NO' }"
        />
      </field>

  </li>
  <li class="border border-gray-700 m-5 p-5">
    <field label="Total number of months of unpaid rent (Round if necessary)">
        <control
          v-model="form.landlordName"
           placeholder="Total number of months of unpaid rent (Round if necessary)"
        />
      </field>
  </li>
  <li class="border border-gray-700 m-5 p-5">
    <field label="The first month and year rent was not paid (EX: May 2020)">
        <control
          v-model="form.landlordName"
           placeholder="The first month and year rent was not paid (EX: May 2020)"
        />
      </field>
  </li>
  <li class="border border-gray-700 m-5 p-5">
    <field label="The amount due and owing by the tenant in this case is: $">
        <control
          v-model="form.landlordName"
           placeholder="The amount due and owing by the tenant in this case is: $"
        />
      </field>
  </li>
</ol>



    </card-component>
     <divider />

      <jb-buttons>
        <jb-button
          type="submit"
          color="info"
          label="Submit"
        />
        <jb-button
          type="reset"
          color="info"
          outline
          label="Reset"
        />
      </jb-buttons>
    </card-component>
  </main-section>
</template>
