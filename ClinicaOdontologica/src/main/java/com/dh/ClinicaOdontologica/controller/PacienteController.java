package com.dh.ClinicaOdontologica.controller;

import com.dh.ClinicaOdontologica.entity.Paciente;
import com.dh.ClinicaOdontologica.exception.ResourceNotFounfException;
import com.dh.ClinicaOdontologica.service.IPacienteService;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paciente")
public class PacienteController {

    public static final Logger LOGGER = Logger.getLogger(PacienteController.class);

    private IPacienteService pacienteService;

    public PacienteController(IPacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @PostMapping
    public ResponseEntity<Paciente> guardar(@RequestBody Paciente paciente) {
        LOGGER.info("Paciente guardado");
        return ResponseEntity.ok(pacienteService.guardar(paciente));
    }

    @GetMapping
    public ResponseEntity<List<Paciente>> listarTodos(){
        LOGGER.info("Pacientes listados con exito");
        return ResponseEntity.ok(pacienteService.listarTodos());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> eliminarPaciente(@PathVariable Long id) throws ResourceNotFounfException {
        pacienteService.eliminar(id);
        LOGGER.info("Paciente eliminado");
        return new ResponseEntity<>("Paciente eliminado correctamente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> actualizar(@PathVariable Long id, @RequestBody Paciente paciente) {
        ResponseEntity<String> response;
        Paciente pacienteExistente = pacienteService.buscarPorId(id);
        if(pacienteExistente != null) {
            paciente.setId(id);
            pacienteService.actualizar(paciente);
            String responseBody = "{\"message\": \"Paciente actualizado. Nro ID: " + id + "\"}";
            LOGGER.info("Paciente actualizado");
            return ResponseEntity.ok().body(responseBody);
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el Odontólogo con ID: " + id);
            LOGGER.info("No se pudo actualizar al paciente");
        }
        return response;

    }

    @GetMapping("/{id}")
    public ResponseEntity<Paciente> buscarPorId(@PathVariable Long id) {
        LOGGER.info("Paciente encontrado");
        return ResponseEntity.ok(pacienteService.buscarPorId(id));
    }
}


