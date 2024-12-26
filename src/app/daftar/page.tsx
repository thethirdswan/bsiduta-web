import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import signup from '../lib/signup';

export default function Signup() {
    return (
        <Card className="mx-2 md:mx-[24.707vw]">
            <CardContent>
                <form method='POST' action={signup}>
                    <label htmlFor='username'>Nama</label><br/>
                    <input type='text' name='nama' className='border' required/><br/>
                    <label htmlFor='username'>Username</label><br/>
                    <input type='text' name='username' className='border' required/><br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input type='password' name='password' className='border' required/><br/>
                    <Button variant='contained' className='my-2'>
                        <input type='submit' value="Masuk"></input>
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}