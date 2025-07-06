<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-20 w-auto" src="../public/file.png" alt="amis à poil" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inscrivez-vous</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-lg shadow-lg">
      <form @submit.prevent="handleLogin" class="space-y-6" action="#" method="POST">
        <div>
          <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
          <div class="mt-2">
            <input v-model="firstName" id="firstname" name="firstname" type="text" autocomplete="firstname" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
          <div class="mt-2">
            <input v-model="lastName" id="lastname" name="lastname" type="text" autocomplete="lastname" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="ville" class="block text-sm font-medium leading-6 text-gray-900">Ville</label>
          <div class="mt-2">
            <input v-model="city" id="ville" name="ville" type="text" autocomplete="ville" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="phone_number" class="block text-sm font-medium leading-6 text-gray-900">Numéro de
            téléphone</label>
          <div class="mt-2">
            <input v-model="phone_number" id="phone_number" name="phone_number" type="text" autocomplete="phone_number"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse Email</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="new-password" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">Confirmer le mot de
            passe</label>
          <div class="mt-2">
            <input v-model="confirmPassword" id="confirm-password" name="confirm-password" type="password"
              autocomplete="new-password" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">S'inscrire</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Déjà membre ?
        <nuxt-link to="/login"
          class="font-semibold leading-6 text-orange-600 hover:text-orange-500">Connectez-vous</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      city: '',
      phone_number: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    };
  },
  mounted() {
    // Vérifier si l'utilisateur est déjà authentifié via sessionStorage
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      // Si l'utilisateur est authentifié, rediriger vers la page d'accueil ou une autre page
      this.$router.push('/');
    }
  },
  methods: {
    async handleLogin() {
      this.error = null;  // Reset error message

      try {

        if (this.password !== this.confirmPassword) {
          throw new Error('Les mots de passe ne correspondent pas');
        }
        const response = await fetch('http://localhost:3001/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone_number: this.phone_number,
            city: this.city,
            password: this.password,
          }),
          credentials: 'include'
        });

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
          throw new Error("Erreur lors de l'inscription");
        }

        this.$router.push('/login');

      } catch (error) {
        this.error = error.message;
      }
    },
    handleLogout() {
      // Déconnecter l'utilisateur
      sessionStorage.removeItem('isAuthenticated'); // Supprimer l'état d'authentification
      this.$router.push('/login'); // Rediriger vers la page de connexion
    }
  }
};
</script>

<style scoped>
/* Ajoutez ici vos styles spécifiques à ce composant */
</style>
