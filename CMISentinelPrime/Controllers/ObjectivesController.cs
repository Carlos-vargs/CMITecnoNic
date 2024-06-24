using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CMISentinelPrime.Models;

namespace CMISentinelPrime.Controllers
{
    public class ObjectivesController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Objectives
        public ActionResult Index()
        {
            var objectiveSet = db.ObjectiveSet.Include(o => o.CMI).Include(o => o.Perspective);
            return View(objectiveSet.ToList());
        }

        // GET: Objectives/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Objective objective = db.ObjectiveSet.Find(id);
            if (objective == null)
            {
                return HttpNotFound();
            }
            return View(objective);
        }

        // GET: Objectives/Create
        public ActionResult Create()
        {
            ViewBag.CMIId = new SelectList(db.CMISet, "Id", "Name");
            ViewBag.PerspectiveId = new SelectList(db.PerspectiveSet, "Id", "Name");
            return View();
        }

        // POST: Objectives/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Description,Metric,Weighting,CMIId,PerspectiveId")] Objective objective)
        {
            if (ModelState.IsValid)
            {
                db.ObjectiveSet.Add(objective);
                db.SaveChanges();
                return RedirectToAction("Details", "CMI", new { id = objective.CMIId });
            }

            return RedirectToAction("Index", "CMI");
        }

        // GET: Objectives/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Objective objective = db.ObjectiveSet.Find(id);
            if (objective == null)
            {
                return HttpNotFound();
            }

            var response = new
            {
                Objective = new
                {
                    id = objective.Id,
                    Description = objective.Description,
                    PerspectiveId = objective.PerspectiveId
                },
            };
            return Json(response, JsonRequestBehavior.AllowGet);
        }
        // POST: Objectives/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Description,Metric,Weighting,CMIId,PerspectiveId")] Objective objective)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    db.Entry(objective).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("Details", "CMI", new { id = objective.CMIId });
                }
                else
                {
                    // Agregar algún tipo de registro para ModelState no válido
                    foreach (var state in ModelState)
                    {
                        foreach (var error in state.Value.Errors)
                        {
                            // Aquí puedes usar tu propio mecanismo de logging
                            System.Diagnostics.Debug.WriteLine($"Error en {state.Key}: {error.ErrorMessage}");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Registrar la excepción
                System.Diagnostics.Debug.WriteLine("Excepción capturada: " + ex.Message);
                // Si deseas, puedes agregar más información del stack trace
                System.Diagnostics.Debug.WriteLine("StackTrace: " + ex.StackTrace);

                // También podrías agregar una notificación al usuario sobre el error
                // TempData["ErrorMessage"] = "Ocurrió un error al guardar los cambios.";
            }

            return RedirectToAction("Details", "CMI", new { id = objective.CMIId });
        }


        // GET: Objectives/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Objective objective = db.ObjectiveSet.Find(id);
            if (objective == null)
            {
                return HttpNotFound();
            }
            return View(objective);
        }

        // POST: Objectives/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id, int CmiId)
        {
            Objective objective = db.ObjectiveSet.Find(id);
            db.ObjectiveSet.Remove(objective);
            db.SaveChanges();
            return RedirectToAction("Details", "CMI", new { id = CmiId });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
