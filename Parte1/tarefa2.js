async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();

        const filteredUsers = data.filter(user => user.username.startsWith('M'));
        
        return filteredUsers;

    } catch (error) {
        console.error('Erro ao buscar dados dos usuários:', error);
    }
}

fetchUserData().then(filteredUsers => {
    console.log(filteredUsers);
});
