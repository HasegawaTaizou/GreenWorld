<template>
  <section id="volunteer-container">
    <div class="volunteer-content">
      <img
        class="volunteer__image"
        src="./img/volunteer-image.webp"
        alt="Volunteer image"
      />

      <div class="volunteer__tag-name-data">
        <span class="volunteer__tag">Voluntário</span>
        <div class="volunteer__title-icon">
          <h1 class="volunteer__name">{{ volunteer.nome_completo }}</h1>
          <i
            @click="enableVolunteerInput"
            class="volunteer__icon far fa-edit"
          ></i>
        </div>
        <ul class="volunteer__personal-data">
          <li class="personal-data">
            <span class="uppercase personal-data__type">cpf:</span>
            <input
              v-model="volunteer.cpf"
              class="personal-data__area personal-data__value"
              :disabled="disabledVolunteer"
            />
          </li>
          <li class="personal-data">
            <span class="uppercase personal-data__type">rg:</span>
            <input
              v-model="volunteer.rg"
              class="personal-data__area personal-data__value"
              :disabled="disabledVolunteer"
            />
          </li>
          <li class="personal-data">
            <span class="personal-data__type">Data de nascimento:</span>
            <input
              v-model="volunteer.data_nascimento"
              type="text"
              class="personal-data__area personal-data__value"
              :disabled="disabledVolunteer"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="volunteer-information">
      <div class="volunteer-content__address">
        <div class="content__title-icon">
          <h3 class="address__title">Endereço</h3>
          <i
            @click="enableAddressInput"
            class="volunteer__icon far fa-edit"
          ></i>
        </div>

        <div class="volunteer__address">
          <span class="information">CEP:</span>
          <input
            v-model="volunteer.endereco.cep"
            class="address__area information__value"
            :disabled="disabledAddress"
          />
        </div>
        <div class="volunteer__address">
          <span class="information">Logradouro:</span>
          <input
            v-model="volunteer.endereco.logradouro"
            class="address__area information__value"
            disabled
          />
        </div>
        <div class="volunteer__address">
          <span class="information">Bairro:</span>
          <input
            v-model="volunteer.endereco.bairro"
            class="address__area information__value"
            disabled
          />
        </div>
        <div class="volunteer__address">
          <span class="information">Cidade:</span>
          <input
            v-model="volunteer.endereco.cidade"
            class="address__area information__value"
            disabled
          />
        </div>
        <div class="volunteer__address">
          <span class="information">Estado:</span>
          <input
            v-model="volunteer.endereco.estado"
            class="address__area information__value"
            disabled
          />
        </div>
      </div>
      <div class="volunteer-content__contact">
        <div class="content__title-icon">
          <h3 class="contact__title">Contato</h3>
          <i
            @click="enableContactInput"
            class="volunteer__icon far fa-edit"
          ></i>
        </div>

        <div class="volunteer__contact">
          <span class="contact">Telefone:</span>
          <input
            v-model="volunteer.telefone"
            class="contact__area contact__value"
            :disabled="disabledContact"
          />
        </div>
        <div class="volunteer__contact">
          <span class="contact">E-mail:</span>
          <input
            v-model="volunteer.email"
            class="contact__area contact__value"
            :disabled="disabledContact"
          />
        </div>
      </div>
      <div class="volunteer-content__reason">
        <div class="content__title-icon">
          <h3 class="information__title">Motivo</h3>
          <i @click="enableReasonInput" class="volunteer__icon far fa-edit"></i>
        </div>

        <input
          v-model="volunteer.motivo"
          class="reason__area volunteer-reason__text"
          :disabled="disabledReason"
        />
      </div>
      <div class="volunteer-content__experience">
        <div class="content__title-icon">
          <h3 class="information__title">Experiência</h3>
          <i
            @click="update('.experience__area')"
            class="volunteer__icon far fa-edit"
          ></i>
        </div>

        <span class="experience__area volunteer__experience">
          Menos de 1 ano
        </span>
      </div>

      <div class="volunteer-content__helps">
        <h3 class="information__title">Ajudas das quais participou</h3>
        <ul class="help-list">
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="content-buttons">
      <button class="update-data__button" @click="postData">
        Atualizar dados
      </button>
      <router-link to="/dashboard/all-volunteers/volunteer/">
        <button class="delete__button">Cancelar</button>
      </router-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateVolunteer",
  data() {
    return {
      disabledVolunteer: true,
      disabledAddress: true,
      disabledContact: true,
      disabledReason: true,
      volunteer: [],
    };
  },
  mounted() {
    this.fillVolunteer();
  },
  watch: {
    "$store.state.selectedVolunteerCpf": {
      immediate: true,
      handler(newVolunteerCpf) {
        console.log("Novo CPF voluntario:", newVolunteerCpf);
        if (newVolunteerCpf) {
          this.fillVolunteer(newVolunteerCpf);
        }
      },
    },
  },
  methods: {
    postData() {
      const volunteerData = {
        cpf: this.volunteer.cpf,
        novos_dados: this.volunteer
      }

      console.log(volunteerData);

      axios
        .put(
          "http://127.0.0.1:8080/v6/green-world/update_voluntario_pelo_cpf",
          volunteerData
        )
        .then((response) => {
          // Manipular a resposta do servidor
          console.log(response.data);
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
    updateVolunteerData() {
      console.log(this.volunteer);
    },
    fillVolunteer(cpf) {
      const volunteerCpf = {
        cpf: cpf,
      };
      console.log(volunteerCpf);

      axios
        .post(
          "http://127.0.0.1:8080/v5/green-world/get_voluntario_pelo_cpf",
          volunteerCpf
        )
        .then((response) => {
          this.volunteer = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
    enableVolunteerInput() {
      this.disabledVolunteer = false;
    },
    enableContactInput() {
      this.disabledContact = false;
    },
    enableAddressInput() {
      this.disabledAddress = false;
    },
    enableReasonInput() {
      this.disabledReason = false;
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/volunteer/updateVolunteerStyle.css");
</style>