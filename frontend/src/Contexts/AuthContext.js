import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    
});

function AuthContextProvider({children})
{
    return <AuthContext>{children}</AuthContext>
}
export default AuthContextProvider;