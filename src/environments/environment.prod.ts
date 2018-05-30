import { Environment } from './environment'
export class EnvironmentProd implements Environment {  
  urlPrefix = "http://jxw.cloud-focus.net:8081/"
  ocrKey = "F7j8S8D5UttmMZuQULzkJa" 
  ocrSecret = "8118729b60314e4d9c863086092be6a8"
  pageSize = 20
  downloadLink = "http://jxw.cloud-focus.net:8081/app/release/lovelystove.apk"
  version = "201711271104"
}
