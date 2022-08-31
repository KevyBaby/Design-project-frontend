import { Link } from "react-router-dom"
import './driver.css';

export const Drivers = () => {
    return (
        <main>
            <Link to="/">Back</Link><br />
            <h2>Welcome to the Drivers!</h2>
            
            <div className="App">
                <table>
                    <tr>
                    <th>Driver Full Names</th>
                    <th>Email</th>
                    <th>Travel Date</th>
                    <th>Car Model</th>
                    <th>Kilometers</th>
                    </tr>
                    <tr>
                    <td>Alex Gordons</td>
                    <td>alexa@gmail.com</td>
                    <td>Mahindra</td>
                    <td>27-08-2022</td>
                    <td>48.1KM</td>
                    </tr>
                    <tr>
                    <td>Nkosi Mdluli</td>
                    <td>nkosi101@gmail.com</td>
                    <td>Volvo</td>
                    <td>26-08-2022</td>
                    <td>30.0KM</td>
                    </tr>
                    <tr>
                    <td>Jacob Lans</td>
                    <td>jpeterson@gmail.com</td>
                    <td>Volvo</td>
                    <td>24-08-2022</td>
                    <td>51.6KM</td>
                    </tr>
                    <tr>
                    <td>Peter Merwe</td>
                    <td>petermerwe@gmail.com</td>
                    <td>24-08-2022</td>
                    <td>43.5KM</td>
                    </tr>
                    <tr>
                    <td>Katlego Diole</td>
                    <td>katdiole@gmail.com</td>
                    <td>Man</td>
                    <td>22-08-2022</td>
                    <td>24.2KM</td>
                    </tr>
                    <tr>
                    <td>Solomon Bogatsu</td>
                    <td>Solomon60@gmail.com</td>
                    <td>Man</td>
                    <td>24-08-2022</td>
                    <td>32.8KM</td>
                    </tr>
                    <tr>
                    <td>Jan Van Dyk</td>
                    <td>jvandyk@gmail.com</td>
                    <td>22-08-2022</td>
                    <td>18.5KM</td>
                    </tr>
                    <tr>
                    <td>Danny Reeves</td>
                    <td>danreeves@gmail.com</td>
                    <td>Mercedes</td>
                    <td>34.4KM</td>
                    </tr>
                    <tr>
                    <td>Kyle Paige</td>
                    <td>kylep@gmail.com</td>
                    <td>Mahindra</td>
                    <td>21-08-2022</td>
                    <td>33.7KM</td>
                    </tr>
                    <tr>
                    <td>Ronald Mpofu</td>
                    <td>ronaldmpofu@gmail.com</td>
                    <td>Man</td>
                    <td>20-08-2022</td>
                    <td>40.0KM</td>
                    </tr>
                    <tr>
                    <td>Hector Modise</td>
                    <td>modisehector@gmail.com</td>
                    <td>Man</td>
                    <td>20-08-2022</td>
                    <td>26.6KM</td>
                    </tr>

                </table>
            </div>
        </main>
    )
}