import type { LoginInfoState } from './LoginInfoState'
export interface RegisterInfoState extends LoginInfoState {
    reenteredPassword: string | null
}