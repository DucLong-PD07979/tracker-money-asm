import app from './server';
import { PORT_SERVER } from './configs/environment';
import passportConfig from '@/configs/passports';
const PORT = PORT_SERVER || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
