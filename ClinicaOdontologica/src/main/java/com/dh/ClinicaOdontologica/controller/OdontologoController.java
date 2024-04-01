package com.dh.ClinicaOdontologica.controller;

import com.dh.ClinicaOdontologica.entity.Odontologo;
import com.dh.ClinicaOdontologica.exception.ResourceNotFounfException;
import com.dh.ClinicaOdontologica.service.IOdontologoService;
import com.dh.ClinicaOdontologica.service.implementation.OdontologoService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/odontologos")
public class OdontologoController {
    private IOdontologoService odontologoService;

    private static final Logger LOGGER = Logger.getLogger(OdontologoController.class);

    @Autowired
    public OdontologoController(OdontologoService odontologoService){
        this.odontologoService = odontologoService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Odontologo> buscarPorId(@PathVariable Long id) {
        LOGGER.info("Odontologo encontrado");
        return ResponseEntity.ok(odontologoService.buscarPorId(id));
    }
    @PostMapping
    public ResponseEntity<Odontologo> guardar(@RequestBody Odontologo odontologo) {
        LOGGER.info("Odontologo guardado");
        return ResponseEntity.ok(odontologoService.guardar(odontologo));
    }

    @GetMapping
    public ResponseEntity<List<Odontologo>> listarTodos() {
        LOGGER.info("Odontologos listados");
        return ResponseEntity.ok(odontologoService.listarTodos());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> actualizar(@PathVariable Long id, @RequestBody Odontologo odontologo) {
        ResponseEntity<String> response;
        Odontologo odontologoExistente = odontologoService.buscarPorId(id);
        if(odontologoExistente != null) {
            odontologo.setId(id);
            odontologoService.actualizar(odontologo);
            String responseBody = "{\"message\": \"Odontologo actualizado. Nro ID: " + id + "\"}";
            LOGGER.info("Se actualizó el odontologo con exito");
            return ResponseEntity.ok().body(responseBody);
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el Odontólogo con ID: " + id);
            LOGGER.info("No se pudo actualizar el odontologo");
        }
        return response;
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> eliminarOdontologo(@PathVariable Long id) throws ResourceNotFounfException {
        odontologoService.eliminar(id);
        LOGGER.info("Odontologo eliminado encontrado");
        return new ResponseEntity<>("Odontolodo eliminado correctamente", HttpStatus.OK);
    }

    @GetMapping("/matricula/{matricula}")
    public ResponseEntity<Odontologo> findByMatricula(@PathVariable String matricula) throws ResourceNotFounfException {
        Optional<Odontologo> odontologoOptional= odontologoService.findByMatricula(matricula);
        if (odontologoOptional.isPresent()) {
            LOGGER.info("Odontologo encontrado");
            return ResponseEntity.ok(odontologoOptional.get());
        }else {
            LOGGER.info("No se encontrò el odontologo");
            throw new ResourceNotFounfException("No se encontrò el odontologo con matricula nro: " + matricula);
        }
    }
}
