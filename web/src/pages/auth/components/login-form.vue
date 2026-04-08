<script lang="ts" setup>
import { useAuth } from '@/composables/use-auth'

import GitHubButton from './github-button.vue'
import GoogleButton from './google-button.vue'
import PrivacyPolicyButton from './privacy-policy-button.vue'
import TermsOfServiceButton from './terms-of-service-button.vue'
import ToForgotPasswordLink from './to-forgot-password-link.vue'

const { errorMessage, login, loading } = useAuth()
const username = ref('')
const password = ref('')

const isSubmitDisabled = computed(() => {
  return loading.value || !username.value.trim() || !password.value
})

async function handleSubmit() {
  await login({
    username: username.value.trim(),
    password: password.value,
  })
}
</script>

<template>
  <UiCard class="w-full max-w-sm">
    <UiCardHeader>
      <UiCardTitle class="text-2xl">
        Login
      </UiCardTitle>
      <UiCardDescription>
        Enter your username and password below to log into your account.
        Not have an account?
        <UiButton
          variant="link" class="px-0 text-muted-foreground"
          @click="$router.push('/auth/sign-up')"
        >
          Sign Up
        </UiButton>
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent>
      <form class="grid gap-4" @submit.prevent="handleSubmit">
        <div class="grid gap-2">
          <UiLabel for="username">
            Username
          </UiLabel>
          <UiInput id="username" v-model="username" autocomplete="username" placeholder="admin" required />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center justify-between">
            <UiLabel for="password">
              Password
            </UiLabel>
            <ToForgotPasswordLink />
          </div>
          <UiInput id="password" v-model="password" autocomplete="current-password" type="password" required placeholder="*********" />
        </div>

        <p v-if="errorMessage" class="text-sm text-destructive">
          {{ errorMessage }}
        </p>

        <UiButton class="w-full" type="submit" :disabled="isSubmitDisabled">
          <UiSpinner v-if="loading" class="mr-2" />
          Sign In
        </UiButton>

        <UiSeparator label="Or continue with" />

        <div class="flex flex-col items-center justify-between gap-4">
          <GitHubButton />
          <GoogleButton />
        </div>

        <UiCardDescription>
          By clicking login, you agree to our
          <TermsOfServiceButton />
          and
          <PrivacyPolicyButton />
        </UiCardDescription>
      </form>
    </UiCardContent>
  </UiCard>
</template>
