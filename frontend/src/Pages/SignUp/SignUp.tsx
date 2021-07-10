import { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onButtonClick = () => {
        console.log({ name, email, gender, birthday, username, password });
    };

    return (
        <div>
            <h1>sign up</h1>
            <form onSubmit={e => e.preventDefault()}>
                <label>nome</label>
                <input
                    type='text'
                    title='nome'
                    onChange={e => setName(e.target.value)}
                    required
                />
                <label>email</label>
                <input
                    type='email'
                    title='email'
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <label>gênero</label>
                <input
                    type='radio'
                    title='gênero'
                    onChange={e => setGender(e.target.value)}
                    required
                />
                <label>data de nascimento</label>
                <input
                    type='date'
                    title='data de nascimento'
                    onChange={e => setBirthday(e.target.value)}
                    required
                />
                <label>usuário</label>
                <input
                    type='text'
                    title='usuário'
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <label>senha</label>
                <input
                    type='password'
                    title='senha'
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button onClick={onButtonClick}>enviar</button>
            </form>
        </div>
    );
};

export default SignUp;
