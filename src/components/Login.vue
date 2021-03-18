<template>
<v-form>

    <v-container class="d-flex justify-center">
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="Username"
            filled
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Password"
            filled
          ></v-text-field>
          <div class="my-2">
            <v-btn
              x-large
              color="success"
              dark
            >
              Sign In
            </v-btn>
          </div>
        </v-col>
    </v-container>

  </v-form>
</template>
