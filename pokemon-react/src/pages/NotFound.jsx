function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Página no encontrada</h2>
      <img
        src="/404.png"
        alt="404 - Página no encontrada"
        className="error-image"
      />
      <p>La ruta que has escrito no existe.</p>
    </div>
  );
}

export default NotFound;
