import { User } from "@/types/user";
import { api } from "./api";

export async function getUsers() {
  try {
    const response = await api.get("/users");

    return response

  } catch (error) {
    console.error('Erro interno na API', error);

    throw new Error('Erro ao buscar os usuários')
  }
}

export async function getUserById(id: string) {
  try {
    const response = await api.get(`/users/${id}`);

    return response

  } catch (error) {
    console.error('Erro interno na API', error);

    throw new Error('Erro ao buscar usuário')
  }
}

export async function createUser(data: { fullName: string, username: string, password: string, role: string }) {
  try {
    const payload = { ...data, isAdmin: false }

    const response = await api.post('/users', payload);

    return response

  } catch (error) {
    console.error('Erro interno na API', error);

    throw new Error('Erro ao criar usuário')
  }
}

export async function updateUser(id: string, data: Partial<User>) {
  try {
    const payload = { ...data }

    const response = await api.put(`/users/${id}`, payload);

    return response

  } catch (error) {
    console.error('Erro interno na API', error);

    throw new Error('Erro ao atualizar usuário')
  }
}

export async function deleteUser(id: string) {
  try {
    await api.delete(`/users/${id}`);

  } catch (error) {
    console.error('Erro interno na API', error);

    throw new Error('Erro ao deletar usuário')
  }
}
