import { Environment } from './environment'
export class EnvironmentDev implements Environment {  
  urlPrefix = "http://localhost:8088/"
  //ocrKey = "AmYUZFPPwhqB9GLeXvqjgF"
  //ocrSecret = "1d72680629534e09aaaf47bff34ce6f9"
  ocrKey = "F7j8S8D5UttmMZuQULzkJa" 
  ocrSecret = "8118729b60314e4d9c863086092be6a8"
  pageSize = 20
  downloadLink = "http://localhost:8088/app/release/lovelystove.apk"
  version = "201711271104"
}
