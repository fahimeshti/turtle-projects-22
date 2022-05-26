
const token = ' d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3'

async function getUsers() {
    let url = 'https://gorest.co.in/public/v1/users';
    try {
        let res = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getUsers()
