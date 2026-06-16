import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../types/auth.types";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(null);
  const user = ref<User | null>(null);
  const loading = ref(false);

  const isAuthenticated = computed(() => !!token.value);

  const userFullName = computed(() => user.value?.fullName ?? "");

  const userId = computed(() => user.value?.id ?? null);

  function setToken(value: string) {
    token.value = value;
    localStorage.setItem("token", value);
  }

  function setUser(data: User) {
    user.value = data;
    localStorage.setItem("user", JSON.stringify(data));
  }

  function setAuth(payload: { token: string; user: User }) {
    setToken(payload.token);
    setUser(payload.user);
  }

  function setLoading(value: boolean) {
    loading.value = value;
  }

  function logout() {
    token.value = null;
    user.value = null;

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  function init() {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken) {
      token.value = savedToken;
    }

    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser);
      } catch (e) {
        user.value = null;
      }
    }
  }

  return {
    token,
    user,
    loading,

    isAuthenticated,
    userFullName,
    userId,

    setToken,
    setUser,
    setAuth,
    setLoading,
    logout,
    init,
  };
});
