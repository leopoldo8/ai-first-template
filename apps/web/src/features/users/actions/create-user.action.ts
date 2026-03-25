'use server'

// Server Action for creating a user
// Demonstrates the Application layer pattern in frontend Clean Architecture

interface ICreateUserInput {
  readonly name: string
  readonly email: string
}

interface ICreateUserResult {
  readonly success: boolean
  readonly error?: string
}

export async function createUserAction(
  input: ICreateUserInput,
): Promise<ICreateUserResult> {
  // Replace with actual API call to apps/api
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })

    if (!response.ok) {
      return { success: false, error: 'Failed to create user' }
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Network error' }
  }
}
