import { get } from "env-var";


export const envs = {
    PORT: get('PORT').required().default('8080').asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('./public').asString(),
}