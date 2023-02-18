import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Alert from "react-bootstrap/Alert";

export default function App({ Component, pageProps }) {
  function Example() {
    return (
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
    );
  }
  return <Component {...pageProps} />;
}
