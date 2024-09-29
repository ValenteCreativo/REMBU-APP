// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RembuToken is ERC20, Ownable {
    // El token que se usará como recompensa
    constructor() ERC20("RembuToken", "REMBU") Ownable(msg.sender) {
        // El suministro inicial de tokens será asignado al creador del contrato
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    /**
     * @dev Función para que el propietario del contrato pueda mint nuevos tokens si es necesario.
     * @param to Dirección a la que se enviarán los nuevos tokens.
     * @param amount Cantidad de tokens a mintar.
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}

contract RembuData is Ownable {
    // Estructura para la información de cada antena
    struct Antenna {
        string id;  // ID único de la antena
        address owner;  // Dueño de la antena
        string location;  // Ubicación de la antena (IP, coordenadas, etc.)
        bool isRegistered;  // Para verificar si ya está registrada
    }

    RembuToken public token;  // El token que usaremos como recompensa

    // Mapeo para almacenar antenas
    mapping(string => Antenna) public antennas;

    // Evento que se dispara cuando se registran datos
    event DataCollected(
        string indexed antennaId,
        uint256 humidity,
        uint256 noise,
        uint256 uv,
        uint256 airQuality,
        uint256 co2
    );

    // Evento que se dispara cuando se registra una nueva antena
    event AntennaRegistered(string indexed antennaId, address indexed owner, string location);

    // Constructor para enlazar el token de recompensas y establecer el dueño del contrato
    constructor(address tokenAddress) Ownable(msg.sender) {
        require(tokenAddress != address(0), "Token address cannot be zero");
        token = RembuToken(tokenAddress);
    }

    /**
     * @dev Función para registrar una nueva antena.
     * @param antennaId ID único de la antena.
     * @param location Ubicación de la antena.
     */
    function registerAntenna(string memory antennaId, string memory location) external {
        require(bytes(antennaId).length > 0, "Antenna ID cannot be empty");
        require(!antennas[antennaId].isRegistered, "Antenna already registered");
        require(bytes(location).length > 0, "Location cannot be empty");

        antennas[antennaId] = Antenna({
            id: antennaId,
            owner: msg.sender,
            location: location,
            isRegistered: true
        });

        emit AntennaRegistered(antennaId, msg.sender, location);
    }

    /**
     * @dev Función para recolectar datos de la antena y recompensar al propietario.
     * @param antennaId ID de la antena.
     * @param humidity Humedad registrada.
     * @param noise Ruido registrado.
     * @param uv Nivel de UV registrado.
     * @param airQuality Calidad del aire registrada.
     * @param co2 Nivel de CO2 registrado.
     */
    function collectData(
        string memory antennaId,
        uint256 humidity,
        uint256 noise,
        uint256 uv,
        uint256 airQuality,
        uint256 co2
    ) external {
        Antenna storage antenna = antennas[antennaId];
        require(antenna.isRegistered, "Antenna not registered");
        require(antenna.owner == msg.sender, "You are not the owner of this antenna");

        // Emite el evento de datos recolectados
        emit DataCollected(antennaId, humidity, noise, uv, airQuality, co2);

        // Recompensa al usuario con tokens
        uint256 rewardAmount = 10 * (10 ** token.decimals());
        require(token.balanceOf(address(this)) >= rewardAmount, "Insufficient token balance in contract");
        bool success = token.transfer(msg.sender, rewardAmount);
        require(success, "Token transfer failed");
    }

    /**
     * @dev Función para que el propietario del contrato pueda depositar tokens en el contrato para recompensas.
     * @param amount Cantidad de tokens a depositar.
     */
    function depositTokens(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than zero");
        bool success = token.transferFrom(msg.sender, address(this), amount);
        require(success, "Token transfer failed");
    }

    /**
     * @dev Función para que el propietario del contrato pueda retirar tokens.
     * @param amount Cantidad de tokens a retirar.
     */
    function withdrawTokens(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than zero");
        bool success = token.transfer(owner(), amount);
        require(success, "Token transfer failed");
    }
}
