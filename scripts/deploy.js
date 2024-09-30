const hre = require("hardhat");

async function main() {
    try {
        // Obtener la fábrica del contrato RembuToken
        const RembuToken = await hre.ethers.getContractFactory("RembuToken");

        // Desplegar el contrato RembuToken
        const rembuToken = await RembuToken.deploy();

        // Imprimir la transacción de despliegue para depurar
        console.log("Detalles de la transacción de despliegue:", rembuToken);

        // Verificar si la transacción de despliegue existe antes de esperar
        if (!rembuToken.deployTransaction) {
            throw new Error("Error: No se generó deployTransaction en el contrato RembuToken.");
        }

        // Esperar a que la transacción de despliegue se confirme
        await rembuToken.deployTransaction.wait();

        // Verificar si la dirección del contrato es válida
        if (!rembuToken.address) {
            throw new Error("Error: No se pudo desplegar el contrato RembuToken.");
        }

        console.log("Contrato RembuToken desplegado en:", rembuToken.address);

        // Obtener la fábrica del contrato RembuData
        const RembuData = await hre.ethers.getContractFactory("RembuData");

        // Desplegar el contrato RembuData pasando la dirección del contrato RembuToken
        const rembuData = await RembuData.deploy(rembuToken.address);

        // Esperar a que la transacción de despliegue se confirme
        await rembuData.deployTransaction.wait();

        // Verificar si la dirección del contrato es válida
        if (!rembuData.address) {
            throw new Error("Error: No se pudo desplegar el contrato RembuData.");
        }

        console.log("Contrato RembuData desplegado en:", rembuData.address);

    } catch (error) {
        console.error("Error en el despliegue:", error);
    }
}

// Ejecutar el script de despliegue
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error en el despliegue:", error);
    process.exit(1);
  });
