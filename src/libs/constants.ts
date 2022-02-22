export const HISTORY_DROPDOWN_OPTIONS = [
    {
        type: 'button',
        text: 'Выполнить',
        id: 0,
        dangerous: false
    },
    {
        type: 'button',
        text: 'Скопировать',
        id: 1,
        dangerous: false
    },
    {
        type: 'line',
        id: 2
    },
    {
        type: 'button',
        text: 'Удалить',
        id: 3,
        dangerous: true
    }
];

interface I_LOGIN_FORM {
    type: 'input' | 'submit' | 'password',
    label: string,
    required: boolean,
    id: string,
}

export const LOGIN_FORM : I_LOGIN_FORM[] = [
    {
        type: 'input', id: "login", label: "Логин", required: true
    },
    {
        type: 'input', id: "sublogin", label: "Сублогин", required: false
    },
    {
        type: 'password', id: "password", label: "Пароль", required: true
    },
    {
        type: 'submit', id: "confirm", label: "Войти", required: false
    }
]