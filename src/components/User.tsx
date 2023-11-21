import { useState } from "react";
import { UserInterface } from "../interfaces/user-interface";




export default function User() {

    const [user, setUser] = useState<UserInterface>();

    const viewUser = (): void => {
        setUser({
            uuid: '1234',
            name: 'Pedro Hernández'
        });
    }

  return (
    <div className="mt-4">
        <h2> User - Login </h2> 
        {
        ( !user ) 
            ? <button 
                onClick={viewUser}
                className="btn btn-primary me-2">
                Loggin
            </button>
            : <button 
                onClick={ () => setUser( undefined ) }
                className="btn btn-outline-primary">
                Logout
            </button>
        }
        
      <>
      <div className="card mt-4 w-50 text-bg-primary">
        <h5 className="card-header">User Data</h5>
        <div className="card-body">
            {
                (!user)
                    ? <h5 className="card-title">Not exits user</h5>
                    : <>
                        <p className="card-text">Uuid: { JSON.stringify( user.uuid )}</p>
                        <p className="card-text">Name: { JSON.stringify( user.name )}</p>
                     </>
            }
        </div>
      </div>
      </>
    </div>
  )
}
