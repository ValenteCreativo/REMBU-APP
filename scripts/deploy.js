const hre = require("hardhat");

async function main() {
  // Compila los contratos
  await hre.run('compile');

  // Despliega el contrato Rembu
  const Rembu = await hre.ethers.getContractFactory("Rembu");
  const rembu = await Rembu.deploy();

  await rembu.deployed();

  console.log("Contrato Rembu desplegado a:", rembu.address);
}

// Manejo de errores
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
