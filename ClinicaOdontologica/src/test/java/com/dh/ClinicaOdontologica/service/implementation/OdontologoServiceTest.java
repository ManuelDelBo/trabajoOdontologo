package com.dh.ClinicaOdontologica.service.implementation;

import com.dh.ClinicaOdontologica.entity.Odontologo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

class OdontologoServiceTest {

    @Autowired
    private OdontologoService odontologoService;

    @Test
    void guardar() {

        Integer odontologoId = 1;
        Odontologo odontologo = new Odontologo("Manu", "Del Bo", "1234");
        odontologoService.guardar(odontologo);

        assertNotNull(odontologo);
    }
}