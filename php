<?php
// buscar_producto.php
if (isset($_GET['searchQuery'])) {
    $searchQuery = $_GET['searchQuery'];
    // Conexión a la base de datos
    $conn = new mysqli('localhost', 'usuario', 'contraseña', 'basededatos');

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Consulta SQL para buscar productos por nombre
    $sql = "SELECT name FROM products WHERE name LIKE ? LIMIT 10";
    $stmt = $conn->prepare($sql);
    $searchTerm = "%" . $searchQuery . "%";
    $stmt->bind_param('s', $searchTerm);
    $stmt->execute();
    $result = $stmt->get_result();

    $products = [];
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    // Devolver los productos en formato JSON
    echo json_encode($products);

    $stmt->close();
    $conn->close();
}
?>
