import gql from 'graphql-tag';

export const REGISTER_MUTATION = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password) {
            ok
            errors {
                path
                message
            }
        }
    }
`;

export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            ok
            token
            refreshToken
            errors {
                path
                message
            }
        }
    }
`;

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($option: String!, $value: String!) {
        updateUser(option: $option, value: $value) {
            ok
            errors {
                path
                message
            }
        }
    }
`;

export const DELETE_USER_MUTATION = gql`
    mutation DeleteUser() {
        deleteUser()
    }
`;